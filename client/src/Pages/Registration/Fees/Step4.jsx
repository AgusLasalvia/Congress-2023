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
               {/* Modality */}
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">Modality in which you wish to participate<span>*</span></label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="presentation"
                              checked={formData.modality === "presentation"}
                              onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                         />
                         <label className="form-radio-label">Oral Presentation</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="poster"
                              checked={formData.modality === "poster"}
                              onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                         />
                         <label className="form-radio-label">Poster</label>
                    </div>
               </div>
               {/* First time registering */}
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">First time registering?<span>*</span></label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="SecondSet" className="form-radio" value="yes"
                              checked={formData.firstTime === "yes"}
                              onChange={(e) => setFormData({ ...formData, firstTime: e.target.value })}
                         />
                         <label className="form-radio-label">Yes</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="SecondSet" className="form-radio" value="no"
                              checked={formData.firstTime === "no"}
                              onChange={(e) => setFormData({ ...formData, firstTime: e.target.value })}
                         />
                         <label className="form-radio-label">No</label>
                    </div>
               </div>

               {/* Special meals */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Special">Special meal requirements<span>*</span></label>
                    <input className="form-input" type="text" id="special" name="Region"
                         value={formData.specialMealReqs}
                         onChange={(e) => setFormData({ ...formData, specialMealReqs: e.target.value })}
                    />
               </div>

               {/* Mother language */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="MLanguage">Mother language<span>*</span></label>
                    <input className="form-input" type="text" id="mlanguage" name="MLanguage"
                         value={formData.motherLanguage}
                         onChange={(e) => setFormData({ ...formData, motherLanguage: e.target.value })}
                    />
               </div>
          </motion.div>
     )
}
