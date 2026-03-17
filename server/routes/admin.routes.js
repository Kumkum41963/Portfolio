import express from 'express'
import {
    uploadResume,
    getAdminStats,
    trackView,
    trackPrint,
    trackDownload
} from '../controller/admin.controller.js'
import { fileLimiter } from '../middlewares/rateLimiter.middleware.js'
import { validateInputFile } from '../middlewares/validator.middleware.js'

const router = express.Router()

router.post('/sarkare', fileLimiter, validateInputFile, uploadResume)
// router.post('/sarkare', uploadResume)
router.get('/sarkare/stats', getAdminStats)

router.post('/sarkare/view', trackView)
router.post('/sarkare/print', trackPrint)
router.post('/sarkare/download', trackDownload)

router.get('/sarkare/test', (req, res) => {
    res.send('GET request works for sarkare form')
})

export default router;