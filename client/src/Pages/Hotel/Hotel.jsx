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
                         <h1 className="info-title fees">Corporate rates (per night)</h1>
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
                              <br />
                              <div className="line">
                                   <p>
                                        We suggest the <a href="https://all.accor.com/hotel/9712/index.es.shtml" target="_blank" rel="noreferrer">Hotel Ibis Styles Biarritz</a> for attending the conference.
                                        <br />
                                        <br />
                                        The prices are USD 68 for Single and USD 75 for Double rooms, the fee includes breakfast.
                                        <br />
                                        If you find it suitable you should make the reservation by writing to the manager Marcelo Fernández (<a href="mailto:marcelo.fernandez@accor.com">marcelo.fernandez@accor.com</a>) saying that you are a QUITEL attendee.
                                   </p>
                              </div>

                         </div>
                    </div>

                    {/* Map */}
                    <div className="info-box">
                         <h1 className="info-title">Location on the map</h1>
                         <div className="info-text">
                              <div className="line">
                                   <p>
                                        The hotel is near the conference location, see: <a href="https://www.google.com.uy/travel/hotels/entity/CgoIyKrO0L-W6PUhEAEae0FHWklFZ2J5NUloMGlGX0lPZzhQTUFfVDRhZWUtakgzVEx4UjdlYVgyWFNWX2VRTVd4Ymg3a1VCMzF6bGNGOXZXNmtrWHZTblYzdnpxZ1c2b2F3STBHOENETUtKQnYzTmZyX1dUZ3p1RjhZalJIN2dpajR4VDlqbEdUVQ/location?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4291318%2C4305595%2C4308216%2C4308226%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=es&gl=uy&un=1&rp=ELfpsI_105feVxCs7OLV1YDbs8UBOAFAAEgC&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ap=MAA&sa=X&ts=CAESABpZCjsSNzIlMHg5NTlmODE5ZTBiZTI2ZGZmOjB4NTcyMWExMmEyOTQzYmMwMDoOUHVudGEgQ2FycmV0YXMaABIaEhQKBwjnDxAIGAESBwjnDxAIGAIYATICEAAqCQoFOgNVWVUaAA&ved=0CAAQ5JsGahcKEwiA35vngfn_AhUAAAAAHQAAAAAQAw" rel="noreferrer" target="_blank">Hotel Ibis Styles Montevideo - Google Travel</a>.
                                   </p>
                              </div>
                         </div>
                         <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.172833122882!2d-56.1567834!3d-34.9179112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8130b6c1568d%3A0x21eba0b3fa139548!2sHotel%20Ibis%20Styles%20Montevideo!5e0!3m2!1ses!2suy!4v1686961862688!5m2!1ses!2suy" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
               <Footer />
          </motion.div>
     )
}
