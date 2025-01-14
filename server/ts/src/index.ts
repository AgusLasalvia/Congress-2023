// Node modules imports
import express, { Application, Request, Response } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config(); // Dotenv configuration

const baseUrl: string = '/api/v1'

//Routes imports
import preRegistration from './routes/preRegistration.routes';
import registration from './routes/registration.routes';
import abstract from './routes/abstract.routes';

// Server setup
const app: Application = express();

// Mongoose configuration
connect(process.env.MONGODB as string)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err: Error) => console.log(err.message));

// Express configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(baseUrl, abstract); // Abstract route
app.use(baseUrl, registration); // Registration route
app.use(baseUrl, preRegistration); // Pre-registration route

// Redirect to website
app.get('*', (req: Request, res: Response) => {
  res.redirect('https://quitel23.site/')
})


// Server start
app.listen(3030, () => {
  console.log(`
SERVER START SUCCESSFULLY
Server started on http://localhost:3030
    `)
});
