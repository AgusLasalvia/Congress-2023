/* eslint react/prop-types: 0 */

import { useEffect } from "react";
import { motion } from "framer-motion";
export default function Step2({ setFormData, formData }) {

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
                    <label className="form-label">Level of education<span>*</span></label>
                    {/* Postdocs / Researchers / Professors*/}
                    <div className="form-radio-wrapper">
                         <input type="radio" name="edlevel" className="form-radio" value="postdocs"
                              checked={formData.educationLevel === "postdocs"}
                              onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                         />
                         <label className="form-radio-label">Postdocs / Researchers / Professors</label>
                    </div>
                    {/* Masters / PhD Students */}
                    <div className="form-radio-wrapper">
                         <input type="radio" name="edlevel" className="form-radio" value="phdstudents"
                              checked={formData.educationLevel === "phdstudents"}
                              onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                         />
                         <label className="form-radio-label">Masters / PhD Students</label>
                    </div>
                    {/* Undergraduate Student */}
                    <div className="form-radio-wrapper">
                         <input type="radio" name="edlevel" className="form-radio" value="undergraduates"
                              checked={formData.educationLevel === "undergraduates"}
                              onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                         />
                         <label className="form-radio-label" >Undergraduate Student</label>
                    </div>
               </div>

               {/* Position */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Position">Position<span>*</span></label>
                    <input className="form-input" type="text" id="position<" name="Position"
                         value={formData.position}
                         onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    />
               </div>
               {/* Main Institution */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="MainInstitution">Main Institution<span>*</span></label>
                    <input className="form-input" type="text" id="maininstitution" name="MainInstitution"
                         value={formData.mainInstitution}
                         onChange={(e) => setFormData({ ...formData, mainInstitution: e.target.value })}
                    />
               </div>
               {/* Institutional address */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="InstitutionalAddress">Institutional address<span>*</span></label>
                    <input className="form-input" type="text" id="instaddress" name="InstitutionalAddress"
                         value={formData.institutionalAddress}
                         onChange={(e) => setFormData({ ...formData, institutionalAddress: e.target.value })}
                    />
               </div>

          </motion.div>
     )
}
