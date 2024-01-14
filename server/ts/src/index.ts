// Node modules imports
import express, { Application } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';

const baseUrl = '/api/v1'
//Routes imports
import abstract from './routes/abstractRoute';
import preRegistration from './routes/preRegistrationRoute';
import registration from './routes/registrationRoute';

// Server setup
const app: Application = express();

// Mongoose configuration
// connect('mongodb://localhost:27017/registration')

// Express configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(baseUrl, abstract); // Abstract route
app.use(baseUrl, registration); // Registration route
app.use(baseUrl, preRegistration); // Pre-registration route

app.get('/', (req, res) => {
    res.redirect('https://quitel23.site/')
})

// Server start
app.listen(3030, () => {
    console.log(`
    SERVER START SUCCESSFULLY
    Server started on http://localhost:3030
    `)
});