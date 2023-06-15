import { useEffect, useRef } from "react";

/* eslint react/prop-types: 0 */
export default function Step3({ formData, setFormData }) {

     const hiddenRegistrationButton = useRef(null);
     const hiddenDinnerButton = useRef(null);
     const hiddenAccompanyingButton = useRef(null);

     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);

     }, [])

     return (
          <div>
               {/* Registration payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Registration payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button"
                         onClick={() => { hiddenRegistrationButton.current.click() }}
                    >Select from my computer</div>
                    {/* hidden dinner button */}
                    <input
                         type="file"
                         style={{ display: 'none' }}
                         ref={hiddenRegistrationButton}
                         onChange={(e) => setFormData({ ...formData, registrationPaymentReceipt: e.target.files[0] })}

                    />
               </div>

               {/* Dinner payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Dinner payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button"
                         onClick={() => { hiddenDinnerButton.current.click() }}
                    >Select from my computer</div>
                    {/* hidden dinner button */}
                    <input
                         type="file"
                         style={{ display: 'none' }}
                         ref={hiddenDinnerButton}
                         onChange={(e) => setFormData({ ...formData, dinnerPaymentReceipt: e.target.files[0] })}

                    />
               </div>

               {/* Accompanying payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Accompanying payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button"
                         onClick={() => { hiddenAccompanyingButton.current.click() }}

                    >Select from my computer</div>
                    {/* hidden dinner button */}
                    <input
                         type="file"
                         style={{ display: 'none' }}
                         ref={hiddenAccompanyingButton}
                         onChange={(e) => {
                              setFormData({ ...formData, accompanyingPaymentReceipt: e.target.files[0] })
                              console.log(e.target.files[0])
                         }}
                    />
               </div>
          </div>
     )
}
