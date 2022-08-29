import { Router } from'express'

const router = new Router()

router.get('/', (req, res) => {res.send("Olá do userRoutes")})

export default router
