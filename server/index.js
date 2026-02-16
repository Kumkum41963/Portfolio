import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './connectDb.js'
import { Contact } from './contact.js'

// create app
const app = express()

// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}))
app.use(express.json()) // intercept, check and parse the incoming request

// DB connection always before anything else
connectDB()

// test route
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body

        const contactData = {
            name,
            email,
            message,
            metadata: {
                ip: req.ip || req.headers['x-forwarded-for'] || '0.0.0.0',
                usreAgent: req.get('User-Agent')
            }
        };

        const newContact = new Contact(contactData)
        await newContact.save()
        
        console.log(`📩 New message from ${name} (${email})`);
        res.status(200).json({ message: 'Saved successfully!', received: contactData });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: "Server failed to save data" });
    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`⚡️ [server]: Running at http://localhost:${PORT}`)
})