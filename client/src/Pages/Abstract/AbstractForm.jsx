import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function AbstractForm() {

     const navigate = useNavigate();
     const previousStep = () => {
          navigate("/Quitel/abstract-submission");
     }

     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               <div className="page-info form">
                    {/* The origins */}
                    <div className="info-box">
                         <h1 className="info-title">Abstract submission form</h1>
                         <div className="info-text">
                              <div className="line">
                                   <p>XLVI International Congress of Theoretical Chemists of Latin Expression</p>
                              </div>

                              <div className="form-input-wrapper form-first">
                                   <label className="form-label" htmlFor="Email">Email</label>
                                   <input className="form-input" type="email" id="email" name="Email" />
                              </div>
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="FirstName">First name</label>
                                   <input className="form-input" type="text" id="firstname" name="FirstName" />
                              </div>
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="LastName">Last name</label>
                                   <input className="form-input" type="text" id="lastname" name="LastName" />
                              </div>
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="Title">Title</label>
                                   <input className="form-input" type="text" id="title" name="Title" />
                              </div>

                              <div className="form-upload-wrapper">
                                   <label className="form-label">Upload your abstract in DOC or ODT editable format</label>
                                   {/* TBD if this will be a button or an anchor */}
                                   <div className="upload-button">Select from my computer</div>
                              </div>
                              <div className="form-upload-wrapper">
                                   <label className="form-label">Upload your abstract in PDF format</label>
                                   {/* TBD if this will be a button or an anchor */}
                                   <div className="upload-button">Select from my computer</div>
                              </div>

                              {/* Submit button */}
                              <div className="button-long-blue abstract-submit-button">Submit</div>
                              <div className="button-long-pink" onClick={previousStep}>Back</div>
                         </div>
                    </div>
               </div>
               <Footer />
          </motion.div>
     )
}
