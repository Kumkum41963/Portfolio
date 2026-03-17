import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true }, // The link from Cloudinary
    cloudinaryId: { type: String, required: true }, // Needed to delete files later

    // Stats for Admin Panel
    viewCount: { type: Number, default: 0 },
    downloadCount: { type: Number, default: 0 },

    // Metadata
    ip: { type: String },
    userAgent: { type: String },

    // Timestamp 
}, { timestamps: true });

export const Resume = mongoose.model('Resume', resumeSchema);