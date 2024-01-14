import { createAbstract, uploadAbstractFiles } from "../controllers/abstractController";
import { sendMail } from "../controllers/mailController";
import { Request, Response, Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post('/abstract', createAbstract, uploadAbstractFiles, (req: Request, res: Response) => {
    sendMail(
        req.body.abstract,
        "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
        "QUITEL 2023 Pre Registration"
    )
});

export default router