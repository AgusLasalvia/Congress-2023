import { Abstract } from '../models/abstract.model'
import { NextFunction, Request, Response } from 'express';
import { uploadFile } from './googleDrive.controller'

export const createAbstract = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const newAbstract = new Abstract(body);
  await newAbstract.save().then(() => {
    res.status(2).json({ message: 'success' });
  });
};

export const uploadAbstractFiles = async (req: Request, res: Response, next: NextFunction) => {
  const files = req?.files; // Get all files from incoming Form

  // Check existing files, if exists, save it on Google Drive
  if (files?.registration != null) {
    await uploadFile(files.registration, process.env.REGISTRATION_FOLDER_ID as string)
    console.log("registration file uploaded")
  }
  if (files?.dinner != null) {
    await uploadFile(files.dinner, process.env.DINNER_FOLDER_ID as string);
    console.log("dinner file uploaded")
  }
  if (files?.accompanying != null) {
    await uploadFile(files.accompanying, process.env.ACCOMPANYING_FOLDER_ID as string);
    console.log("accompaning file uploaded")
  }
  next()
};
