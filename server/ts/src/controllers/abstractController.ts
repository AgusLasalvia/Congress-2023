import { Abstract } from '../models/abstractModel'
import { Request, Response } from 'express';

export const createAbstract = async (req: Request, res: Response) => {
    const body = req.body;
    const newAbstract = new Abstract(body);
    await newAbstract.save().then(() => {
        res.status(2).json({ message: 'success' });
    });
};