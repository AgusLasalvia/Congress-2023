/* eslint react/prop-types: 0 */

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Step3({ formData, setFormData }) {
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
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">Have you ever attended a Quitel/Chitel congress?<span>*</span></label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="yes"
                              checked={formData.hasAttended === "yes"}
                              onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">Yes</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="no"
                              checked={formData.hasAttended === "no"}
                              onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">No</label>
                    </div>
               </div>

               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">Would you like to receive information about the Congress?<span>*</span></label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="SecondSet" className="form-radio" value="yes"
                              checked={formData.mail === "yes"}
                              onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                         />
                         <label className="form-radio-label">Yes</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="SecondSet" className="form-radio" value="no"
                              checked={formData.mail === "no"}
                              onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                         />
                         <label className="form-radio-label">No</label>
                    </div>
               </div>
          </motion.div>
     )
}
