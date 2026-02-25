import { contact } from '../controller/contact.controller'
import express from 'express'

const router = express.Router()

router.post('/contact', contact)
router.get('/contact', (req, res) => {
    res.send('GET request works for contact form')
})

export default router;