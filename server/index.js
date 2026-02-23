import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet'
import sanitizeHtml from 'sanitize-html'
import ExpressMongoSanitize from 'express-mongo-sanitize';
import { connectDB } from './connectDb.js'
import { Contact } from './contact.model.js'

import { sendContactMails } from './email.service.js';
import { limiter } from './middlewares/rateLimiter.middleware.js'
import { inputValidationSchema } from './middlewares/validator.middleware.js';

// create app
const app = express()

// middlewares
app.use(helmet()) // protection against http headers
app.use(ExpressMongoSanitize())
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}))
app.use(express.json()) // intercept, check and parse the incoming request
app.use(limiter) // limits the incoming requests

// DB connection always before anything else
connectDB()
console.log('DB connected')

// Testing Sanitation of client
// const html = "<strong>hello world</strong>";
// console.log('1')
// console.log(sanitizeHtml(html));
// console.log('2')
// console.log(sanitizeHtml("<img src=x onerror=alert('img') />"))
// console.log('3')
// console.log(sanitizeHtml("console.log('hello world')"));
// console.log('4')
// console.log(sanitizeHtml("<script>alert('hello world')</script>"));

// test route
app.post('/contact', async (req, res) => {
    try {

        // Validate the incoming request
        const validatedInput = inputValidationSchema.parse(req.body)
        const { name, email, message } = validatedInput

        const contactData = {
            name: sanitizeHtml(name),
            email: email.toLowerCase().trim(), // Normalizing email
            message: sanitizeHtml(message),
            metadata: {
                ip: req.ip || req.headers['x-forwarded-for'] || '0.0.0.0',
                usreAgent: req.get('User-Agent')
            }
        };

        const newContact = new Contact(contactData)
        await newContact.save()

        // Send mails 
        const emailInfo = await sendContactMails(name, email, message)

        console.log(`📩 New message from ${name} (${email})`);
        console.log('Received and Email sent.')
        res.status(200).json({ message: 'Saved and Emailed successfully!', received: contactData, emaiSent: emailInfo });

    } catch (error) {

        // Detect Validation Error 
        if (error.name === 'ZodError') {
            return res.status(400).json({
                success: false,
                error: "Validation Failed",
                details: error.errors || error.details
            });
        }

        console.error("Critical Error:", error);
        return res.status(500).json({
            success: false,
            error: "An internal server error occurred"
        });
    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`⚡️ [server]: Running at http://localhost:${PORT}`)
})