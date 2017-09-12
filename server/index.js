import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.static(__dirname + '/public/'))
app.listen(process.env.PORT)
