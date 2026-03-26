import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet'
import ExpressMongoSanitize from 'express-mongo-sanitize';
import { connectDB } from './service/connectDb.service.js'
import { contactLimiter as limiter } from './middlewares/rateLimiter.middleware.js'
import contactRoutes from './routes/contact.routes.js'
import adminRoutes from './routes/admin.routes.js'

// create app
const app = express()
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_LOCAL_URL
];
console.log("✅ Allowed Origins:", allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / server-to-server

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middlewares
app.use(helmet()) // global protection against http headers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(ExpressMongoSanitize()) // sanitation
app.use(cors(corsOptions)) // backend frontend connect
app.use(express.json()) // intercept, check and parse the incoming request
// app.use(limiter) // limits the incoming requests

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
app.get('/api/test', (req, res) => {
  res.send('GET request to the admin')
  console.log('connection established')
})

app.use('/api', adminRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`⚡️ [server]: Running at http://localhost:${PORT}`)
})