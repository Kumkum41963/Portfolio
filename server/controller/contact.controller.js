import { inputValidationSchema } from '../middlewares/validator.middleware.js';
import sanitizeHtml from 'sanitize-html'
import { Contact } from '../models/contact.model.js'
import { sendContactMails } from '../service/email.service.js';

export const contact = async (req, res) => {
    try {
        console.log('📬 [Contact] Request received');

        // Validation logic
        console.log('incoming req:', req.body.formData)
        const validatedInput = inputValidationSchema.parse(req.body);
        const { name, email, message } = validatedInput;
        console.log(`✅ [Validation] Success: ${email}`);

        // Data preparation and sanitization
        const contactData = {
            name: sanitizeHtml(name),
            email: email.toLowerCase().trim(),
            message: sanitizeHtml(message),
            metadata: {
                ip: req.ip || req.headers['x-forwarded-for'] || '0.0.0.0',
                userAgent: req.get('User-Agent')
            }
        };

        // Database persistence
        const newContact = new Contact(contactData);
        await newContact.save();
        console.log('💾 [Database] Record saved');

        // Email dispatch
        console.log('📧 [Email] Sending notifications...');
        const emailInfo = await sendContactMails(name, email, message);
        console.log('✨ [Email] Dispatch successful');

        return res.status(200).json({
            success: true,
            message: 'Inquiry processed successfully',
        });

    } catch (error) {
        // Handle validation specific errors
        if (error.name === 'ZodError' && error.errors) {
            console.warn('⚠️ [Validation Failed]:', error.errors.map(e => e.message).join(', '));
            return res.status(400).json({
                success: false,
                error: "Validation Failed",
                details: error.errors
            });
        }

        console.error("🔥 [Critical Error]:", error.message);
        return res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}