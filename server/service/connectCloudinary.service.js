import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// take all keys we require
const requiredConfig = [
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET'
];

// check if all are valid (pehle hi dekhlo)
requiredConfig.forEach((key) => {
    if (!process.env[key]) {
        console.log("❌ Cloudinary Config Error:")
        throw new Error(`CRITICAL:  Configuration missing for ${key}. Check your .env file.`);
    }
});

// configure them
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true //  ensures all generated URLs use https://
});

export default cloudinary;
