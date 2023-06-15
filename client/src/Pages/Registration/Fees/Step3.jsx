import { useEffect } from "react";

/* eslint react/prop-types: 0 */
export default function Step3({ formData, setFormData }) {

     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);

     }, [])

     return (
          <div>
               {/* Country */}
               <div className="form-input-wrapper form-first">
                    <label className="form-label" htmlFor="Country">Country</label>
                    <input className="form-input" type="text" id="country" name="Country"
                         value={formData.country}
                         onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Region */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">Region/State/Province</label>
                    <input className="form-input" type="text" id="region" name="Region"
                         value={formData.region}
                         onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    />
               </div>
               {/* City */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">City</label>
                    <input className="form-input" type="text" id="city" name="City"
                         value={formData.city}
                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
               </div>
               {/* Zip code */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Zipcode">Postal/Zip code</label>
                    <input className="form-input" type="text" id="zipcode" name="Zipcode"
                         value={formData.zipCode}
                         onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    />
               </div>
          </div>
     )
}
