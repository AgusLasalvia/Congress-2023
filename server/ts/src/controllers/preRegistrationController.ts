import { preRegister } from '../models/preRegistrationModel'
import { Request, Response, NextFunction } from 'express';



// Search if exist registratio
export const searchExistenPreRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    await preRegister.findOne({ email }).then((data) => {
        if (data) {
            next();
        }
        res.status(404).json({ message: 'No existe registro' });
    });
};

// Create pre-registration
export const createPreRegistration = async (req: Request, res: Response) => {
    const { email } = req.body;
    const newPreRegistration = new preRegister({ email });
    await newPreRegistration.save().then(() => {
        res.status(201).json({ message: 'success' });
    });
};
