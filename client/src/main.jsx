import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// page imports
import Home from './Pages/Home/Home.jsx';
import './Pages/Home/Home.css';
import About from './Pages/About/About.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import './Pages/Registration/Registration.css';
import Fees from './Pages/Registration/Fees/Fees.jsx';
import RegistrationForm from './Pages/Registration/Fees/RegistrationForm.jsx';
import PreRegistration from './Pages/Registration/PreRegistration/PreRegistration.jsx';
import Abstract from './Pages/Abstract/Abstract.jsx';
import AbstractForm from './Pages/Abstract/AbstractForm.jsx';
import './Pages/Abstract/Abstract.css';
import Speakers from './Pages/Speakers/Speakers.jsx';
import Committees from './Pages/Commitees/Committees.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import ErrorElement from './Pages/ErrorElement.jsx';
import Venue from './Pages/Venue/Venue.jsx';

// component imports
import './components/Navbar/Navbar.css';
import './components/HomeCTA/HomeCTA.css';
import './components/Footer/Footer.css';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/quitel/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/quitel/about" element={<About />} />
    <Route path="/quitel/registration" element={<Registration />} />
    <Route path="/quitel/registration-info" element={<Fees />} />
    <Route path="/quitel/registration-form" element={<RegistrationForm />} />
    <Route path="/quitel/preregistration-form" element={<PreRegistration />} />
    <Route path="/quitel/abstract-submission" element={<Abstract />} />
    <Route path="/quitel/abstract-submission-form" element={<AbstractForm />} />
    <Route path="/quitel/speakers" element={<Speakers />} />
    <Route path="/quitel/committees" element={<Committees />} />
    <Route path="/quitel/contact" element={<Contact />} />
    <Route path="/quitel/venue" element={<Venue />} />
    <Route path="*" element={<ErrorElement />} />
  </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
