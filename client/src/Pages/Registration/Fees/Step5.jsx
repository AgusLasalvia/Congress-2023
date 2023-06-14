/* eslint react/prop-types: 0 */
export default function Step3(
     // { formData, setFormData }
) {

     return (
          <div>
               {/* Registration payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Registration payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button">Select from my computer</div>
               </div>
               {/* Dinner payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Dinner payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button">Select from my computer</div>
               </div>
               {/* Accompanying payment receipt */}
               <div className="form-upload-wrapper">
                    <label className="form-label">Upload your Accompanying payment receipt</label>
                    {/* TBD if this will be a button or an anchor */}
                    <div className="upload-button">Select from my computer</div>
               </div>
          </div>
     )
}
