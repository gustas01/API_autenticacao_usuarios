import express from 'express'
import routes from './routes.js'
import helmet from 'helmet'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(helmet())
app.listen(3000, () => console.log('servidor executando na porta 3000 http://localhost:3000'))