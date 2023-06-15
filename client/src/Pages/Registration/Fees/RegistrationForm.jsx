import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registration, sendRegistration } from "../../../services/FormsService";
import { validateData } from "../../../hooks/validateData";
import Footer from "../../../components/Footer/Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";


export default function PreRegistration() {

     // form data object
     const [formData, setFormData] = useState(registration);
     // Empty fields boolean
     const [hasEmptyFields, setHasEmptyFields] = useState(false);
     // navigation hook
     const navigate = useNavigate();
     // step count state
     const [step, setStep] = useState(1);


     // Goes to the next step in the form
     const nextStep = () => {
          if (step <= 4) {
               setStep(step + 1);
          }
     }

     // Goes to the previous step in the form
     // Or goes back to registration when on step 1
     const previousStep = () => {
          if (step == 1) {
               navigate("/Quitel/registration");
          } else {
               setStep(step - 1);
          }
     }

     const handleSubmit = () => {
          console.log(formData)
          if (validateData(formData)) {
               setHasEmptyFields(false);
               sendRegistration(formData);
          } else {
               setHasEmptyFields(true);
          }
     }

     return (
          <div className="page-wrapper">

               <div className="page-info form">
                    <div className="info-box">
                         <h1 className="info-title">Registration form</h1>
                         <div className="info-text">
                              <div className="line">
                                   <p>XLVI International Congress of Theoretical Chemists of Latin Expression</p>
                              </div>
                              <h1 className="info-counter">
                                   {step < 5 ? "Step " + step + "/5" : "Last step!"}
                              </h1>

                              {/* Switches between steps */}
                              {(() => {
                                   switch (step) {
                                        case 1:
                                             return <Step1 formData={formData} setFormData={setFormData} />
                                        case 2:
                                             return <Step2 formData={formData} setFormData={setFormData} />
                                        case 3:
                                             return <Step3 formData={formData} setFormData={setFormData} />
                                        case 4:
                                             return <Step4 formData={formData} setFormData={setFormData} />
                                        case 5:
                                             return <Step5 formData={formData} setFormData={setFormData} />
                                        default:
                                             return null
                                   }
                              })()}

                              {hasEmptyFields && <p className="form-error-message">There may be empty fields in one of the steps, please check.</p>}

                              {/* Form buttons */}
                              <div className="button-long-blue submit-button"
                                   onClick={step == 5 ? handleSubmit : nextStep}
                              >{step == 5 ? "Submit" : "Continue"}</div>
                              <div className="button-long-pink" onClick={previousStep}>Back</div>
                         </div>
                    </div>
               </div>

               <Footer />

          </div>
     )
}
