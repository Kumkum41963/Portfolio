import { inputValidationSchema } from '../middlewares/validator.middleware.js';
import sanitizeHtml from 'sanitize-html'
import { Contact } from '../models/contact.model.js'
import { sendContactMails } from '../service/email.service.js';

export const contact = async (req, res) => {
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

}