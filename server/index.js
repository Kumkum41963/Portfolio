import express from 'express'
import cors from 'cors'

// create app
const app = express()

// middlewares
app.use(cors())
app.use(express.json()) // intercept, check and parse the incoming request

// test route
app.get('/contact', (req, res) => {
    res.send("App Initialized!!")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})