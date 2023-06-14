import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import PayPalTest from "../../../services/PayPal";
import { useEffect, useState } from "react";

export default function Fees() {
     const [feeSelection, setFeeSelection] = useState("postdocs");

     const navigate = useNavigate();

     const navigateToForm = () => {
          navigate("/Quitel/registration-form")
     }
     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);
     }, []);

     const goBack = () => {
          navigate("/quitel/registration");
     }
     return (
          <div className="page-wrapper">

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Registration fees
                    </p>
                    <p className="page-title-p fees">
                         Early registration dates and pricing: All registrations received before August 1st will be favored with a 10% discount.
                    </p>
               </h1>

               <div className="page-info">
                    {/* Until June 30th */}
                    <div className="info-box">
                         <h1 className="info-title fees">Early, until August 1st.</h1>
                         <div className="info-text">
                              {/* Level */}
                              <div className="line heading">
                                   <p>Level</p>
                                   <p>USD</p>
                              </div>
                              <div className="line">
                                   <p>Postdocs / Researchers / Professors</p>
                                   <p>405</p>
                              </div>
                              <div className="line">
                                   <p>Master / PhD Students</p>
                                   <p>270</p>
                              </div>
                              <div className="line">
                                   <p>Undergraduate Student</p>
                                   <p>225</p>
                              </div>
                              {/* Additional */}
                              <div className="line heading second">
                                   <p>Additional</p>
                                   <p>USD</p>
                              </div>
                              <div className="line">
                                   <p>Accompanying</p>
                                   <p>180</p>
                              </div>
                              <div className="line">
                                   <p>Closing dinner</p>
                                   <p>40</p>
                              </div>
                         </div>
                    </div>

                    {/* From July 1st */}
                    <div className="info-box">
                         <h1 className="info-title fees">From August 1st.</h1>
                         <div className="info-text">
                              {/* Level */}
                              <div className="line heading">
                                   <p>Level</p>
                                   <p>USD</p>
                              </div>
                              <div className="line">
                                   <p>Postdocs / Researchers / Professors</p>
                                   <p>450</p>
                              </div>
                              <div className="line">
                                   <p>Master / PhD Students</p>
                                   <p>300</p>
                              </div>
                              <div className="line">
                                   <p>Undergraduate Student</p>
                                   <p>250</p>
                              </div>
                              {/* Additional */}
                              <div className="line header second">
                                   <p>Additional</p>
                                   <p>USD</p>
                              </div>
                              <div className="line">
                                   <p>Accompanying</p>
                                   <p>200</p>
                              </div>
                              <div className="line">
                                   <p>Closing dinner</p>
                                   <p>40</p>
                              </div>
                         </div>
                    </div>

                    {/* To be noted */}
                    <div className="info-box">
                         <div className="info-text">
                              <h1 className="info-title fees">Please note:</h1>
                              <div className="line heading">
                                   <p>The registration package for the participants includes:</p>
                              </div>
                              <ul>
                                   <li>Conference Pack</li>
                                   <li>Access to the conference sessions and exhibitions</li>
                                   <li>Coffee break</li>
                              </ul>
                              <br />
                              <br />
                              <div className="line heading">
                                   <p>Researchers and Students belonging to PEDECIBA (Uruguay):</p>
                              </div>
                              <p>
                                   Researchers and students who belong to PEDECIBA and who wish to pay through PEDECIBA must complete the following <a href="https://drive.google.com/file/d/1Ctr87tIPmz5BkRSXfdCY3ddYxlVduWxo/view" rel="noreferrer" target="_blank">form</a> and attach it to the <b>Registration payment receipt</b> section found in the registration form.
                              </p>
                         </div>
                    </div>

                    {/* Payment */}
                    <div className="info-box">
                         <div className="info-text">
                              <h1 className="info-title fees paypal">Registration fee payment</h1>
                              <div className="line">
                                   <p>Payments can be made with PayPal using a credit or debit card.</p>
                              </div>
                              <div className="line-input">
                                   <label className="form-label" htmlFor="Email">Registration fee</label>
                                   <select name="registration-fee" id="fee-select" className="form-select"
                                        onChange={(e) => setFeeSelection(e.target.value)}
                                   >
                                        <option value="postdocs">Postdocs / Researchers / Professors - 405 USD</option>
                                        <option value="phdstudents">Master / PhD Students - 271 USD</option>
                                        <option value="undergraduates">Undergraduate Students - 225 USD</option>
                                        <option value="accompanying">Accompanying - 180 USD</option>
                                        <option value="dinner"> Dinner - 40 USD</option>
                                   </select>
                              </div>

                              {/* PayPal button */}
                              <PayPalTest feeSelection={feeSelection} />
                              <h1 className="info-title fees paypal">Registration form</h1>
                              <div className="line">
                                   <p>You can submit your registration before you make a payment.</p>
                              </div>
                         </div>
                         <div className="button-long-blue" onClick={navigateToForm}>Registration form</div>
                         <div className="button-long-pink" onClick={goBack}>Back</div>

                    </div>



               </div>

               <Footer />
          </div>
     )
}
