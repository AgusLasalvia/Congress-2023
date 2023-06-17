import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Hotel() {
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
                         Recommended Hotel
                    </p>
                    <p className="page-title-p">
                         Ibis Styles Biarritz Hotel
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <h1 className="info-title fees">Corporate rates</h1>
                         <div className="info-text">
                              <div className="line heading">
                                   <p>Rooms</p>
                                   <p>USD</p>
                              </div>
                              <div className="line">
                                   <p>Single room</p>
                                   <p>68</p>
                              </div>
                              <div className="line">
                                   <p>Double room</p>
                                   <p>75</p>
                              </div>

                              <div className="line">
                                   <p>To make a reservation please write to: <a href="mailto:marcelo.fernandez@accor.com">marcelo.fernandez@accor.com</a></p>
                              </div>

                         </div>
                    </div>

                    {/* Map */}
                    <div className="info-box">
                         <h1 className="info-title">Ibis Styles Biarritz Hotel</h1>
                         <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.172833122882!2d-56.1567834!3d-34.9179112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8130b6c1568d%3A0x21eba0b3fa139548!2sHotel%20Ibis%20Styles%20Montevideo!5e0!3m2!1ses!2suy!4v1686961862688!5m2!1ses!2suy" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
               <Footer />
          </motion.div>
     )
}
