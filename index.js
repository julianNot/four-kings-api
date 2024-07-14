import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './database/database.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})