import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { abstract, abstractFiles, sendAbstract, sendAbstractFiles } from "../../services/FormsService";
import { validateData } from "../../hooks/validateData";
import { useEffect, useRef, useState } from "react";

export default function AbstractForm() {

     // form data object
     const [formData, setFormData] = useState(abstract);
     // receipts object
     const [files, setFiles] = useState(abstractFiles);

     // Error message
     const [errorMessage, setErrorMessage] = useState("");
     // Button disabled boolean
     const [isDisabled, setIsDisabled] = useState(false);

     // navigation hook
     const navigate = useNavigate();


     const navigateOnSuccess = () => {
          navigate("/Quitel/success");
     }

     // hidden button refs
     const hiddenEditableFormatButton = useRef(null);
     const hiddenPdfFormatButton = useRef(null);


     const handleSubmit = () => {
          // This function will not be called as long as if isDisabled is
          // true, therefore "disabling" the button until a server response is received.
          setIsDisabled(true);

          // It is not mandatory to not send the receipts
          if (validateData(formData)) {
               setErrorMessage("");
               sendAbstract(formData, navigateOnSuccess, setErrorMessage, setIsDisabled);
               sendAbstractFiles(files);
          } else {
               setErrorMessage("There may be empty fields in one of the steps, please check.");
          }
     }

     const previousStep = () => {
          navigate("/Quitel/abstract-submission");
     }

     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);
     }, [])

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               <div className="page-info form">
                    <div className="info-box">
                         <h1 className="info-title">Abstract submission form</h1>
                         <div className="info-text">
                              <div className="line">
                                   <p>XLVI International Congress of Theoretical Chemists of Latin Expression</p>
                              </div>

                              {/* Email */}
                              <div className="form-input-wrapper form-first">
                                   <label className="form-label" htmlFor="Email">Email</label>
                                   <input className="form-input" type="email" id="email" name="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                   />
                              </div>
                              {/* First name */}
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="FirstName">First name</label>
                                   <input className="form-input" type="text" id="firstname" name="FirstName"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                   />
                              </div>
                              {/* Last name */}
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="LastName">Last name</label>
                                   <input className="form-input" type="text" id="lastname" name="LastName"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                   />
                              </div>
                              {/* Abstract title */}
                              <div className="form-input-wrapper">
                                   <label className="form-label" htmlFor="Title">Title</label>
                                   <input className="form-input" type="text" id="title" name="Title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                   />
                              </div>

                              {/* Editable format file */}
                              <div className="form-upload-wrapper">
                                   <label className="form-label">Upload your abstract in DOC or ODT editable format</label>
                                   {files.editableFormat && <div className="line">{files.editableFormat.name}</div>}
                                   <div className="upload-button"
                                        onClick={() => { hiddenEditableFormatButton.current.click() }}
                                   >Select from my computer</div>
                                   {/* hidden upload button */}
                                   <input
                                        type="file"
                                        accept=".odt, .docx, .doc"
                                        style={{ display: 'none' }}
                                        ref={hiddenEditableFormatButton}
                                        onChange={(e) => setFiles({ ...files, editableFormat: e.target.files[0] })}
                                   />
                              </div>

                              {/* PDF format file */}
                              <div className="form-upload-wrapper">
                                   <label className="form-label">Upload your abstract in PDF format</label>
                                   {files.pdfFormat && <div className="line">{files.pdfFormat.name}</div>}
                                   <div className="upload-button"
                                        onClick={() => { hiddenPdfFormatButton.current.click() }}
                                   >Select from my computer</div>
                                   {/* hidden upload button */}
                                   <input
                                        type="file"
                                        accept=".pdf"
                                        style={{ display: 'none' }}
                                        ref={hiddenPdfFormatButton}
                                        onChange={(e) => setFiles({ ...files, pdfFormat: e.target.files[0] })}
                                   />
                              </div>

                              {errorMessage && <p className="form-error-message">{errorMessage}</p>}

                              {/* Submit button */}
                              <div className="button-long-blue abstract-submit-button"
                                   onClick={isDisabled ? null : handleSubmit}
                              >Submit</div>
                              <div className="button-long-pink" onClick={previousStep}>Back</div>
                         </div>
                    </div>
               </div>
               <Footer />
          </motion.div>
     )
}
