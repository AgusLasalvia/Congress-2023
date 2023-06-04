import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function Registration() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <div className="page-wrapper">

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Registration
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1>

               <div className="page-info">
                    {/* pre-registration */}
                    <div className="info-box">
                         <h1 className="info-title">Pre-registration (optional)</h1>
                         <div className="info-text">
                              <p>
                                   In order to receive information about the congress you will need to submit the pre-registration form.
                              </p>
                         </div>
                         {/* button */}
                         <NavLink className="form-button-long-blue" to="/Quitel/preregistration-form">Take me to the pre-registration</NavLink>

                    </div>

                    {/* registration */}
                    <div className="info-box">
                         <h1 className="info-title">Registration</h1>
                         <div className="info-text">
                              <p>
                                   If you want to attend the congress, you will need to submit the registration form.
                              </p>
                         </div>
                         {/* button */}
                         <NavLink className="form-button-long-pink" to="/Quitel/registration-info">Take me to the registration</NavLink>

                    </div>
               </div>

               <Footer />
          </div>
     )
}
