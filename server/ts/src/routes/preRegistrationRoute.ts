import { searchExistenPreRegistration, createPreRegistration } from "../controllers/preRegistrationController";
import { Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post('/pre-registration', searchExistenPreRegistration, createPreRegistration);

export default router;