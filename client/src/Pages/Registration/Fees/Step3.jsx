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
               {/* Country */}
               <div className="form-input-wrapper form-first">
                    <label className="form-label" htmlFor="Country">Country<span>*</span></label>
                    <input className="form-input" type="text" id="country" name="Country"
                         value={formData.country}
                         onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Region */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">Region/State/Province<span>*</span></label>
                    <input className="form-input" type="text" id="region" name="Region"
                         value={formData.region}
                         onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    />
               </div>
               {/* City */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">City<span>*</span></label>
                    <input className="form-input" type="text" id="city" name="City"
                         value={formData.city}
                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
               </div>
               {/* Zip code */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Zipcode">Postal/Zip code<span>*</span></label>
                    <input className="form-input" type="text" id="zipcode" name="Zipcode"
                         value={formData.zipCode}
                         onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    />
               </div>
          </motion.div>
     )
}
