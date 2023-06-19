import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Contact() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Any questions?
                    </p>
                    <p className="page-title-p fees">
                         Feel free to contact us.
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <h1 className="info-title">You can reach us at</h1>
                         <div className="info-text">
                              <p>Our email <a href="mailto:quitel2023@gmail.com"> quitel2023@gmail.com</a></p>
                              <br />
                              <p>Social media:


                                   <ul>
                                        <li>Instagram <a href="https://www.instagram.com/quitel_2023/" rel="noreferrer" target="_blank">@Quitel_2023</a></li>
                                        <li>Twitter <a href="https://twitter.com/quitel_2023" rel="noreferrer" target="_blank">@Quitel_2023</a></li>
                                   </ul>

                              </p>
                         </div>
                    </div>
               </div>


               <Footer />
          </motion.div>
     )
}
