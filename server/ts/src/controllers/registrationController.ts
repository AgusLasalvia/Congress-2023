import { Request, Response, NextFunction } from 'express';
import { Register } from '../models/registrationModel';

export const searchExistenRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    await Register.findOne({ email }).then((data: any): void => {
        if (data.email !== email) next()
        else res.status(404).json({ message: 'Already Registered' });
    });
}

export const createRegistration = async (req: Request, res: Response) => {
    const body = req.body;
    const newRegistration = new Register(body);
    await newRegistration.save().then(() => {
        res.status(201).json({ message: 'success' });
    });
};