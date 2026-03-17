import { z } from 'zod'
import multer, { MulterError } from 'multer'

export const inputValidationSchema = z.object({
    name: z.
        string().
        min(2, "Name must be atleast 2 characters").
        max(50, "Name must not exceed 50 characters").
        regex(/^[A-Za-z\s]+$/, "Name can only contains letters and spaces"),

    email: z.
        string().
        email("Invalid email format").
        max(100, "Email too long"),

    message: z.
        string().
        min(20, "Message must be atleast 20 characters").
        max(5000, "Message must not exceed more than 1000 characters")
})

const storage = multer.memoryStorage()

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true)
        } else {
            cb(new Error('Only pdf files are allowed!'), false)
        }
    }
}).single('resume') // Only 1 file with field name 'resume' allowed

// Catch the error in file upload via multer
export const validateInputFile = (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof MulterError) {  // instanceof is an operator used to check if an object belongs to a specific class or constructor function
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: "File too large. Please keep it under 1MB." })
            }
            return res.status(400).json({ message: err.message })
        } else if (err) {
            return res.status(400).json({ message: err.message })
        }

        if (!req.file) {
            return res.status(400).json({ message: "Please upload a resume file." })
        }

        next()
    })
}