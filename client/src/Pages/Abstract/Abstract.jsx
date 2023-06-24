import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Abstract() {
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
                         Abstract submission
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <div className="line">
                                   <p>Abstract submission deadline: <br /> <b>August 1st</b></p>
                              </div>
                              <div className="line">
                                   <p>If modifications are needed they will be requested before: <br /><b>September 1st</b></p>
                              </div>
                              <br />
                              <div className="line heading">
                                   <p>Poster dimensions: 120 cm length x 80 cm width</p>
                              </div>
                         </div>
                         {/* button */}
                         <a className="button-long-pink" href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit" rel="noreferrer" target="_blank">Download abstract template</a>
                         {/* button */}
                         <NavLink className="button-long-blue" to="/abstract-submission-form">Submit an abstract</NavLink>

                    </div>
               </div>

               <Footer />

          </motion.div>
     )
}
