/* eslint react/prop-types: 0 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Step3({ receipts, setReceipts }) {

     const hiddenRegistrationButton = useRef(null);
     const hiddenDinnerButton = useRef(null);
     const hiddenAccompanyingButton = useRef(null);

     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);

     }, [])

     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               {/* Registration payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Registration payment receipt</label>
                    {receipts.registrationPaymentReceipt && <div className="line">{receipts.registrationPaymentReceipt.name}</div>}

                    <div className="upload-button"
                         onClick={() => { hiddenRegistrationButton.current.click() }}
                    >Select from my computer</div>
                    {/* hidden registration upload button */}
                    <input
                         type="file"
                         accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                         style={{ display: 'none' }}
                         ref={hiddenRegistrationButton}
                         onChange={(e) => setReceipts({ ...receipts, registrationPaymentReceipt: e.target.files[0] })}
                    />
               </div>

               {/* Dinner payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Dinner payment receipt</label>
                    {receipts.dinnerPaymentReceipt && <div className="line">{receipts.dinnerPaymentReceipt.name}</div>}

                    <div className="upload-button"
                         onClick={() => { hiddenDinnerButton.current.click() }}
                    >Select from my computer</div>
                    {/* hidden dinner upload button */}
                    <input
                         type="file"
                         accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                         style={{ display: 'none' }}
                         ref={hiddenDinnerButton}
                         onChange={(e) => setReceipts({ ...receipts, dinnerPaymentReceipt: e.target.files[0] })}
                    />
               </div>

               {/* Accompanying payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Accompanying payment receipt</label>
                    {receipts.accompanyingPaymentReceipt && <div className="line">{receipts.accompanyingPaymentReceipt.name}</div>}

                    <div className="upload-button"
                         onClick={() => { hiddenAccompanyingButton.current.click() }}

                    >Select from my computer</div>
                    {/* hidden accompanying upload button */}
                    <input
                         type="file"
                         accept="image/png, image/jpeg, .pdf, .odt, .docx, .doc"
                         style={{ display: 'none' }}
                         ref={hiddenAccompanyingButton}
                         onChange={(e) => {
                              setReceipts({ ...receipts, accompanyingPaymentReceipt: e.target.files[0] })
                         }}
                    />
               </div>
          </motion.div>
     )
}
