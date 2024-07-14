import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './database/database.js'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'
import tablesRoutes from './routes/tables.routes.js'

import User from './models/User.js'
import TableA from './models/TableA.js'
import TableB from './models/TableB.js'
import TableC from './models/TableC.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Database connected')

    await db.sync({ force: false })
    console.log('Database synchronized')
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
};

connectToDatabase()

app.use('/api', authRoutes)
app.use('/api', usersRoutes)
app.use('/api', tablesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})