import express from'express'
const route = express.Router()

route.get('/', (req, res) => {
    res.send('olá mundoooo')
})

export default route