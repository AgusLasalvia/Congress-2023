import { preRegister } from '../models/preRegistration.model'
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
  const body = req.body;
  const newPreRegistration = new preRegister(body);
  await newPreRegistration.save().then(() => {
    res.status(201).json({ message: 'success' });
  });
};
