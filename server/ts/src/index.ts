// Node modules imports
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import cors from 'cors';

//Routes imports
import abstract from './routes/abstractRoute';
import preRegistration from './routes/preRegistrationRoute';
import registration from './routes/registrationRoute';


const app: Application = express();

connect('mongodb://localhost:27017/registration')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', abstract);
app.use('/api', registration);
app.use('/api', preRegistration);

app.listen(3000, () => {
    console.log('SERVER START SUCCESSFULLY')
});