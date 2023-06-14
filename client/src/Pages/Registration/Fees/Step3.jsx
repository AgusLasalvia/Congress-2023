/* eslint react/prop-types: 0 */
export default function Step3(
     // { formData, setFormData }
) {

     return (
          <div>
               {/* Country */}
               <div className="form-input-wrapper form-first">
                    <label className="form-label" htmlFor="Country">Country</label>
                    <input className="form-input" type="text" id="country" name="Country"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Region */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">Region/State/Province</label>
                    <input className="form-input" type="text" id="region" name="Region"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* City */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">City</label>
                    <input className="form-input" type="text" id="city" name="City"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Zip code */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Zipcode">Postal/Zip code</label>
                    <input className="form-input" type="text" id="zipcode" name="Zipcode"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
          </div>
     )
}
