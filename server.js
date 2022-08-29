import express from 'express'
import helmet from 'helmet'
import userRoutes from './src/routes/userRoutes.js'
import homeRoutes from './src/routes/homeRoutes.js'

const app = express()

app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)
app.use('/', homeRoutes)



app.use(helmet())

const port = 3000
app.listen(port, () => console.log(`servidor executando na porta 3000 http://localhost:${port}`))
