import nodemailer from 'nodemailer'

// Generate SMTP service account from ethereal.email
// Create a SMTP transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eulalia.dietrich@ethereal.email',
        pass: 'wfWcYs5bMNpmyMbKkr'
    }
});

export const sendContactMails = async (contacterName, contacterEmail, contacterMessage) => {

    console.log('Credentials obtained, sending message...');

    // Email A: Confirmation mail
    const confirmationMail = {
        from: '"Your Portfolio" <kumkum19305@gmail.com>',
        to: contacterEmail,
        subject: 'Message Received!',
        html: `<p>Hello <b>${contacterName}</b>,</p><p>Thanks for reaching out! I have received your message and will get back to you soon.</p>`
    };

    // Email B: Admin Mail
    const adminMail = {
        from: '"Portfolio Bot" <kumkum19305@gmail.com>',
        to: 'kumkum19305@gmail.com', // Your personal email
        subject: 'New Portfolio Connection Test!!!',
        text: `New message from ${contacterName} (${contacterEmail}): ${contacterMessage}`,
        html: `<p><b>Name:</b> ${contacterName}</p><p><b>Email:</b> ${contacterEmail}</p><p><b>Message:</b> ${contacterMessage}</p>`
    };

    try {
        // Promise.all sends both emails at the same time
        const [infoUser, infoAdmin] = await Promise.all([
            transporter.sendMail(confirmationMail),
            transporter.sendMail(adminMail)
        ]);

        console.log('✅ Gmail messages sent successfully');
        return {
            success: true,
            userPreview: nodemailer.getTestMessageUrl(infoUser),
            adminPreview: nodemailer.getTestMessageUrl(infoAdmin)
        };
    } catch (error) {
       console.error('❌ Gmail Error:', error.message);
        throw new Error('Email service failed');
    }

};
