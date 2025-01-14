import { Router } from "express";
import { searchExistenRegistration, createRegistration } from "../controllers/registration.controller";

const router = Router();

// Unique route for pre-registration
router.post('/registration', searchExistenRegistration, createRegistration,);


export default router;
