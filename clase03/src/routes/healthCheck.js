import { Router } from "express";
const router = Router()
router.get('/', (req, res) => {

    //aqui podemos chequear si la DB esta arriba, etc.
    try {
        res.status(200).json({
            status: 'ok',
            message: 'Service is healthy',
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Service is not healthy",
            error: err.message
        })
    }
})

export default router