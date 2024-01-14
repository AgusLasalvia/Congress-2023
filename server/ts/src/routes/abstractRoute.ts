import { createAbstract } from "../controllers/abstractController";
import { Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post('/pre-registration', createAbstract);

export default router