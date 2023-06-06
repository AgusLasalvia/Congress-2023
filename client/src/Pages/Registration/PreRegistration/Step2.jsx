/* eslint react/prop-types: 0 */
export default function Step2({ setFormData, formData }) {
     return (
          <div>
               <div className="form-input-wrapper form-first radio">
                    <label className="form-label">Level of education</label>
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

               {/* Country */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Country<">Country</label>
                    <input className="form-input" type="text" id="country<" name="Country"
                         onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
               </div>
               {/* Main Institution */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="MainInstitution">Main Institution</label>
                    <input className="form-input" type="text" id="maininstitution" name="MainInstitution"
                         onChange={(e) => setFormData({ ...formData, mainInstitution: e.target.value })}
                    />
               </div>

          </div>
     )
}
