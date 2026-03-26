import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

// Generate SMTP service account from ethereal.email
// Create a SMTP transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail', // This has to be 'service' instead of 'host'
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    // Timeouts for production feasibility
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 15000,
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
        subject: 'New Portfolio Connection!!!',
        text: `New message from ${contacterName} (${contacterEmail}): ${contacterMessage}`,
        html: `<p><b>Name:</b> ${contacterName}</p><p><b>Email:</b> ${contacterEmail}</p><p><b>Message:</b> ${contacterMessage}</p>`
    };

    try {
        // I could have done parallely concurrently but then that would have caused some more complexity and issues
        // since admin can hold more or wait more to get the mail thus we can make a do by sequential here
        // 1. Send Admin Mail
        const infoAdmin = await transporter.sendMail(adminMail);
        console.log('✅ Admin notification sent');

        // 2. Send User Mail
        const infoUser = await transporter.sendMail(confirmationMail);
        console.log('✅ User confirmation sent');

        console.log('✅ Gmail messages sent successfully');
        return {
            success: true,
            adminMessageId: infoAdmin.messageId,
            userMessageId: infoUser.messageId
        };
    } catch (error) {
        console.error('❌ Gmail Error:', error.message);
        throw new Error('Email service failed');
    }

};
