import { Router } from "express";
import authController from "../controllers/auth.js";
const router = Router()
router.get('/register', authController.registerForm)

export default router