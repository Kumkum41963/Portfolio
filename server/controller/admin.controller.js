import cloudinary from "../service/connectCloudinary.service.js";
import { Resume } from "../models/resume.model.js";
import { Contact } from "../models/contact.model.js";

const handleUpload = fileBuffer => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    folder: "Portfolio_Resume",
                    resource_type: "auto",
                },
                (err, res) => (err ? reject(err) : resolve(res)),
            )
            .end(fileBuffer);
    });
};

export const uploadResume = async (req, res) => {
    try {
        console.log("🚀 [File Upload] Process initiated...");

        // Check if Multer actually caught the file
        if (!req.file) {
            console.log("❌ [File Upload] No file found in req.file");
            return res
                .status(400)
                .json({ message: "Please upload a new resume file!" });
        }
        console.log(`📂 [File Upload] Received: ${req.file.originalname}`);

        // Upload to Cloudinary first (Safety first!)
        console.log("☁️ [Cloudinary] Uploading started...");
        const result = await handleUpload(req.file.buffer);
        console.log("✅ [Cloudinary] Upload successful!");

        // Handle Database update
        console.log("💾 [Database] Syncing resume record...");
        const oldResume = await Resume.findOne();

        const resume = await Resume.findOneAndUpdate(
            {}, // Target the existing document
            {
                fileName: req.file.originalname,
                fileUrl: result.secure_url,
                cloudinaryId: result.public_id,
                ip: req.ip,
            },
            { upsert: true, returnDocument: "after" },
        );
        console.log("✅ [Database] Record updated successfully");

        // Delete the old file from Cloudinary now that the new one is safe
        if (oldResume && oldResume.cloudinaryId) {
            console.log(`🗑️ [Cloudinary] Cleaning up old file`);
            await cloudinary.uploader.destroy(oldResume.cloudinaryId);
            console.log("✅ [Cloudinary] Old file removed");
        }

        console.log("✨ [Success] All systems synced. Upload complete!");
        return res.status(201).json({ success: true, data: resume });
    } catch (error) {
        console.error("🔥 [Critical Error]:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const handleAction = async (action, req, res) => {
    try {
        // find the resume document and update
        const resume = await Resume.findOneAndUpdate(
            {},
            { $inc: { [action]: 1 } },
            {
                sort: { createdAt: -1 },
                returnDocument: "after",
            }, // Always have the latest resume to work with
        );

        // no resume exists
        if (!resume) {
            return res.status(404).json({ error: "Resume not found" });
        }

        // get the target files url
        let targetFileUrl = resume.fileUrl;

        if (action === "downloadCount") {
            targetFileUrl = targetFileUrl.replace(
                "/upload/",
                "/upload/fl_attachment/",
            );
        }

        // Send JSON back to React
        return res.status(200).json({ url: targetFileUrl });
    } catch (error) {
        console.log("Server err performin actions", error.message);
        return res.status(500).send("Server Error Performing Actions");
    }
};

export const trackView = async (req, res) => {
    handleAction("viewCount", req, res);
};
export const trackPrint = async (req, res) => {
    handleAction("printCount", req, res);
};
export const trackDownload = async (req, res) => {
    handleAction("downloadCount", req, res);
};

export const getAdminStats = async (req, res) => {
    try {
        // We fetch the latest resume stats and the total contact count at the same time
        const [resumeData, totalInquiries] = await Promise.all([
            Resume.findOne().sort({ createdAt: -1 }), // top resumes values only in resumedata
            Contact.countDocuments(), // count of all inquiries
        ]);

        return res.status(200).json({
            success: true,
            data: {
                views: resumeData?.viewCount || 0,
                downloads: resumeData?.downloadCount || 0,
                prints: resumeData?.printCount || 0,
                inquiries: totalInquiries,
                lastResumeUpdate: resumeData?.updatedAt,
            },
        });
    } catch (error) {
        console.log("Admin Stats Failed", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};
