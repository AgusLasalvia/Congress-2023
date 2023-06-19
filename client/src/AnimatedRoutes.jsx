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
                    <Route index path="/quitel/" element={<Home />} />
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
                    <Route path="/quitel/hotel" element={<Hotel />} />
                    <Route path="/quitel/success" element={<Success />} />
                    <Route path="*" element={<ErrorPage />} />
               </Routes>
          </AnimatePresence>
     )
}

export default AnimatedRoutes;