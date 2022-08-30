import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import homeRoutes from './routes/homeRoutes.js'

const app = express()
dotenv.config()

app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)
app.use('/', homeRoutes)



app.use(helmet())

app.listen(process.env.APP_PORT, () => console.log(`servidor executando na porta 3000 ${process.env.APP_URL}`))
