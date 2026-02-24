import {contact} from './controller/contact.controller.js'
import express from 'express'

const router = express.Router()

router.post('/contact', contact)

export default router;