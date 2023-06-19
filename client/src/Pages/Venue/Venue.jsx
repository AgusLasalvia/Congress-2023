import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function Venue() {

     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Venue
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <img src="/assets/images/venue.jpg" className="venue-img" alt="Edificio Polifuncional José Luis Massera" role="img" />
                         <h1 className="info-title">Edificio Polifuncional &quot;Jose Luis Massera&quot;</h1>
                         <div className="info-text">
                              <p>Senda Nelson Landoni 631, 11200 Montevideo</p>
                              <br />
                              <p>Montevideo - Uruguay</p>
                         </div>
                    </div>

                    {/* Map */}
                    <div className="info-box">
                         <h1 className="info-title">Location on the map</h1>
                         <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5502.116798662225!2d-56.169693107256265!3d-34.9170327549731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81a27b71199f%3A0x4ece30db435561f!2sEdificio%20Polifuncional%20%22Jose%20Luis%20Massera%22%2C%20Senda%20Ing.%20Nelson%20Landoni%20631%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1686526405383!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>


               <Footer />
          </motion.div>
     )
}
