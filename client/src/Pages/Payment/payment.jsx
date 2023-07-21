import Footer from "../../components/Footer/Footer";

export default function Payment() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);


     return (
          <div className="page-wrapper">

               {/* Page title */}
               < h1 className="page-title" >
                    <p className="page-title-p">
                         PayPal Payment
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1 >

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <h1 className="info-title fees paypal">Registration fee payment</h1>
                              <div className="line">
                                   <p>Payments can be made with <i>PayPal</i> using a credit or debit card.
                                        <br />
                                        The fees are the exact same ones specified on the previous page.
                                        <br />
                                        <br />
                                        Please kindly specify in PayPal which fees are being paid. We thank you in advance.
                                        <br />
                                        *Below you will find the procedure to make the payment.
                                        <br />
                                        <br />
                                   </p>
                              </div>
                         </div>

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
                                        <p></p>
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
                                   <div className="line heading second">
                                        <p>Additional</p>
                                        <p></p>
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

                         {/* step 1 */}
                         <div className="info-text">
                              <div className="line"><p>Click the &quot;Send&quot;/&quot;Enviar&quot; button.</p></div>
                         </div>
                         <img src="assets/images/paypal/1.png" className="image" alt="Step 1" role="img" />

                         <br />

                         {/* step 2 */}
                         <div className="info-text">
                              <div className="line"><p>You will be prompted to sign in or create a PayPal account.</p></div>
                         </div>
                         <img src="assets/images/paypal/2.png" className="image" alt="Step 2" role="img" />

                         <br />

                         {/* step 3 */}
                         <div className="info-text">
                              <div className="line"><p>Once you are logged in to your account, you may fill in the amount to be paid and, if you are able to, specify which fees are being paid.</p></div>
                         </div>
                         <img src="assets/images/paypal/3.png" className="image" alt="Step 3" role="img" />

                         <br />

                         {/* step 4 */}
                         <div className="info-text">
                              <div className="line"><p>You may then fill in the remaining information that PayPal will ask for and select your card to proceed with the payment.</p></div>
                         </div>
                         <img src="assets/images/paypal/4.png" className="image" alt="Step 4" role="img" />

                         {/* Paypal.me */}
                         <a className="button-long-PP" href="https://www.paypal.com/paypalme/fundaquim" rel="noreferrer" target="_blank">
                              <span style={{ color: "black", fontWeight: "800" }}>Ready? Continue to </span><i><span style={{ color: "#002E80", fontWeight: "800" }}>Pay</span><span style={{ color: "#0094D3", fontWeight: "800" }}>Pal</span></i>
                         </a>
                    </div>


               </div>
               <Footer />
          </div >
     )
}
