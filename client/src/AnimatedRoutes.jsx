import { useLocation, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// import App from './App.jsx';
// page imports
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Fees from './Pages/Registration/Fees/Fees.jsx';
import RegistrationForm from './Pages/Registration/Fees/RegistrationForm.jsx';
import PreRegistration from './Pages/Registration/PreRegistration/PreRegistration.jsx';
import Abstract from './Pages/Abstract/Abstract.jsx';
import AbstractForm from './Pages/Abstract/AbstractForm.jsx';
import Speakers from './Pages/Speakers/Speakers.jsx';
import Committees from './Pages/Commitees/Committees.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Venue from './Pages/Venue/Venue.jsx';
import Success from './Pages/Success/Success.jsx';
import Hotel from './Pages/Hotel/Hotel.jsx';


function AnimatedRoutes() {
     const location = useLocation();

     return (
          <AnimatePresence>
               <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/registration-info" element={<Fees />} />
                    <Route path="/registration-form" element={<RegistrationForm />} />
                    <Route path="/preregistration-form" element={<PreRegistration />} />
                    <Route path="/abstract-submission" element={<Abstract />} />
                    <Route path="/abstract-submission-form" element={<AbstractForm />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/committees" element={<Committees />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path="/hotel" element={<Hotel />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="*" element={<ErrorPage />} />
               </Routes>
          </AnimatePresence>
     )
}

export default AnimatedRoutes;