import { contact } from '../controller/contact.controller.js'
import { contactLimiter } from '../middlewares/rateLimiter.middleware.js'
import express from 'express'

const router = express.Router()

router.post('/contact', contactLimiter, contact)
router.get('/contact', (req, res) => {
    res.send('GET request works for contact form')
})

export default router;