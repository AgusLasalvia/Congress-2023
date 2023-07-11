import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import { motion } from "framer-motion";

export default function Home() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);


     // Variants will be filled only on devices with a screen wider than 1366 pixels
     let variants = {};
     if (window.innerWidth > 1366) {
          variants = {
               small: { opacity: 0.5, scale: 0.8 },
               normal: { opacity: 1, scale: 1 },
               duration: { duration: 0.5 },
          }
     }

     return (
          <motion.div className="home"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               <div className="hero">
                    <div className="hero-content">

                         <img src="assets/svg/quitel-letters.svg" alt="" className="quitel-letters" />

                         <h2 className="year">2023</h2>

                         <h1 className="title">
                              XLVI International Congress of Theoretical Chemists of Latin Expression
                         </h1>

                         <h3 className="date">
                              26-30th NOVEMBER 2023 MONTEVIDEO, URUGUAY
                         </h3>

                         {/* scroll cta */}
                         <HomeCTA />
                    </div>
               </div>

               {/* info */}
               <div className="congress-info">

                    <motion.div className="info-box"
                         variants={variants} initial="small" whileInView="normal" transition="duration" viewport={{ once: true }}
                    >
                         <h1 className="info-title">What we aim for.</h1>
                         <div className="info-text">
                              <p>
                                   Since its first edition in Modena, this prestigious congress aims to bring together scientists from all Latin American countries to share their interest in the field of theoretical chemistry and related sciences.
                              </p>
                         </div>
                    </motion.div>

                    <motion.div className="info-box"
                         variants={variants} initial="small" whileInView="normal" transition="duration" viewport={{ once: true }}
                    >
                         <h1 className="info-title">This year&apos;s edition.</h1>
                         <div className="info-text">
                              <p>
                                   This is the first edition of our QUITEL congress after pandemy and for that is so important to us to recover the capacity to be together in our friendly QUITEL society.
                                   <br />
                                   This year it will be developed in Uruguay, the 2024th edition will take place in Belgium and the following 2025th edition in Colombia.
                              </p>
                              <br />
                              <p>
                                   The programme will be designed to attract both academic and industrial interests. PhD students, postdocs and young researchers will have plenty of opportunities to learn and to meet colleagues of their field of interest, as well as colleagues and works from other fields, given the interdisciplinary spectrum that make great this event.
                              </p>
                              <br />
                              <br />
                              <p>
                                   <u>This year, the Scientific Programme will include the following topics :</u>
                              </p>
                              <br />
                              <ul>
                                   <li>Quantum Chemistry and Methodology</li>
                                   <li>Medicinal Chemistry</li>
                                   <li>New Materials and Supramolecular Chemistry</li>
                                   <li>Computational Physical Chemistry</li>
                                   <li>Machine Learning</li>
                                   <li>Cheminformatics</li>
                                   <li>Material Sciences</li>
                                   <li>Computational Biology</li>
                                   <li>Education in Science and Science Communication</li>
                                   <li>Other related areas</li>
                              </ul>

                         </div>
                         <br />
                         <a className="button-long-blue" href="assets/files/schedule-quitel2023.pdf" download>Download schedule</a>
                    </motion.div>

                    <motion.div className="info-box"
                         variants={variants} initial="small" whileInView="normal" transition="duration" viewport={{ once: true }}
                    >
                         <h1 className="info-title">Where will it take place?</h1>
                         <div className="info-text">
                              <p>
                                   QUITEL 2023 will take place at Universidad de la República, Montevideo Uruguay, in a great and emblematic multifunctional building <NavLink to="/venue">José Luis Massera &quot;Faro&quot;</NavLink>, ideally located in the heart of the city near the nice riverside of Rio de La Plata river.
                                   For more information please contact us at
                                   <a href="mailto:quitel2023@gmail.com"> quitel2023@gmail.com</a>
                              </p>
                         </div>
                    </motion.div>

               </div>
               <Footer />
          </motion.div>

     )
}