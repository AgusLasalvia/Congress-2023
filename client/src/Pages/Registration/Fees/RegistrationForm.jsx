import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileReceipts, registration, sendRegistration } from "../../../services/FormsService";
import { validateData } from "../../../hooks/validateData";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer/Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";


export default function PreRegistration() {

     // form data object
     const [formData, setFormData] = useState(registration);
     // receipts object
     const [receipts, setReceipts] = useState(fileReceipts);

     // Error message
     const [errorMessage, setErrorMessage] = useState("");
     // Button disabled boolean
     const [isDisabled, setIsDisabled] = useState(false);


     // navigation hook
     const navigate = useNavigate();
     // step count state
     const [step, setStep] = useState(1);

     const navigateOnSuccess = () => { navigate("/Quitel/success"); }

     // Goes to the next step in the form
     const nextStep = () => {
          if (step <= 4) {
               setStep(step + 1);
          }
     }

     // Goes to the previous step in the form
     // Or goes back to registration when on step 1 (step == 1)
     const previousStep = () => {
          if (step == 1) {
               navigate("/Quitel/registration");
          } else {
               setStep(step - 1);
          }
     }

     const handleSubmit = () => {
          // This function will not be called as long as if isDisabled is
          // true, therefore "disabling" the button until a server response is received.

          // It is not mandatory to send the receipts
          if (validateData(formData)) {
               setIsDisabled(true);
               setErrorMessage("");
               sendRegistration(formData, receipts, navigateOnSuccess, setErrorMessage, setIsDisabled);
          } else {
               setErrorMessage("There may be empty fields in one of the steps, please check.");
          }
     }

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

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
                                             return <Step5 receipts={receipts} setReceipts={setReceipts} />
                                        default:
                                             return null
                                   }
                              })()}

                              {errorMessage && <p className="form-error-message">{errorMessage}</p>}

                              {/* Form buttons */}
                              <div className="button-long-blue submit-button"
                                   onClick={step == 5 ? isDisabled ? null : handleSubmit : nextStep}
                              >{step == 5 ? isDisabled ? "Sending..." : "Submit" : "Continue"}</div>
                              <div className="button-long-pink" onClick={previousStep}>Back</div>
                         </div>
                    </div>
               </div>

               <Footer />

          </motion.div>
     )
}
