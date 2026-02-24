import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet'
import ExpressMongoSanitize from 'express-mongo-sanitize';
import { connectDB } from './service/connectDb.service.js'
import { limiter } from './middlewares/rateLimiter.middleware.js'
import { contact } from './controller/contact.controller.js'

// create app
const app = express()

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}

// Middlewares
app.use(helmet()) // global protection against http headers
app.use(ExpressMongoSanitize()) // sanitation
app.use(cors(corsOptions)) // backend frontend connect
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

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

// Contact controller
app.use('/', contact)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`⚡️ [server]: Running at http://localhost:${PORT}`)
})