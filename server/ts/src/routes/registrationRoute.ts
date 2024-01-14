import { Router } from "express";
import { searchExistenRegistration, createRegistration } from "../controllers/registrationController";

const router = Router();

// Unique route for pre-registration
router.post('/registration', searchExistenRegistration, createRegistration);


export default router;
