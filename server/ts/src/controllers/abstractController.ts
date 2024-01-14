import { Abstract } from '../models/abstractModel'
import { NextFunction, Request, Response } from 'express';
import { uploadFile } from './googleDriveController'

export const createAbstract = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const newAbstract = new Abstract(body);
    await newAbstract.save().then(() => {
        res.status(2).json({ message: 'success' });
    });
};

export const uploadAbstractFiles = async (req: any, res: Response, next: NextFunction) => {
    const files = req?.files; // Get all files from incoming Form
    console.log(files);

    // Check existing files, if exists, save it on Google Drive
    if (files?.registration != (undefined || null)) {
        await uploadFile(files.registration, "process.env.REGISTRATION_FOLDER_ID")
    }
    if (files?.dinner != (undefined || null)) {
        await uploadFile(files.dinner, "process.env.DINNER_FOLDER_ID");
    }
    if (files?.accompanying != (undefined || null)) {
        await uploadFile(files.accompanying, "process.env.ACCOMPANYING_FOLDER_ID");
    }

    next()
};