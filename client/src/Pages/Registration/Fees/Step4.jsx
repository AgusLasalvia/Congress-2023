/* eslint react/prop-types: 0 */
export default function Step3(
     // { formData, setFormData }
) {

     return (
          <div>
               {/* Country */}
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">Modality in which you wish to participate</label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="yes"
                         // checked={formData.hasAttended === "yes"}
                         // onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">Oral Presentation</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="no"
                         // checked={formData.hasAttended === "no"}
                         // onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">Poster</label>
                    </div>
               </div>

               {/* Region */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">Special meal requirements</label>
                    <input className="form-input" type="text" id="region" name="Region"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Country */}
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">First time registering?</label>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="yes"
                         // checked={formData.hasAttended === "yes"}
                         // onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">Yes</label>
                    </div>
                    <div className="form-radio-wrapper">
                         <input type="radio" name="FirstSet" className="form-radio" value="no"
                         // checked={formData.hasAttended === "no"}
                         // onChange={(e) => setFormData({ ...formData, hasAttended: e.target.value })}
                         />
                         <label className="form-radio-label">No</label>
                    </div>
               </div>
               {/* Region */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Region">Mother language</label>
                    <input className="form-input" type="text" id="region" name="Region"
                    // value={formData.country}
                    // onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
          </div>
     )
}
