import { createAbstract, uploadAbstractFiles } from "../controllers/abstractController";
import { Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post('/abstract', createAbstract, uploadAbstractFiles);

export default router