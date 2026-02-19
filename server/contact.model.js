// Schema 
// Name, Email, Message, Timestamp, Ip add , User agent 
import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        message: {
            type: String,
            required: true,
            minLength: 20
        },
        metadata: {
            ip: {
                type: String,
                default: '0.0.0.0'
            },
            userAgent: {
                type: String,
            }
        },
        status: {
            type: String,
            enum: ['new', 'read', 'archived'], // short for Enumeration, ensures that only one of these is present else throws an error
            default: 'new'
        },
    },

    {
        timestamps: true
    }
)

export const Contact = mongoose.model('Contact', contactSchema)