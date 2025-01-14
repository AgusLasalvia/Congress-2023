import { searchExistenPreRegistration, createPreRegistration } from "../controllers/preRegistration.controller";
import { Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post('/pre-registration', searchExistenPreRegistration, createPreRegistration);

export default router;
