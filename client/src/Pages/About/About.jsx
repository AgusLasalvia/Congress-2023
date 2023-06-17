import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function About() {
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
               < h1 className="page-title" >
                    <p className="page-title-p">
                         About
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1 >

               <div className="page-info">
                    {/* The origins */}
                    <div className="info-box">
                         <h1 className="info-title">The origins.</h1>
                         <div className="info-text">
                              <p>
                                   The idea of organising QUITEL was born in Prof. Pullman&apos;s laboratory, situated on the 3rd floor of the Institute of Physico-Chemical Biology in Paris. This occurred during a friendly colloquy between Professors Pullman and Giuseppe Del Re. The topic of conversation was about the different assessments of the role of theoretical chemistry in Italy, France and countries like England and the United States.
                                   <br />
                                   <br />
                                   Apparently, theoreticians are more interested in the meaning of numerical results in order to associate them with physical-chemical phenomena, than in the numbers themselves. However, there is a need to formulate in a clear way such numbers overcoming immediately the language barrier.
                                   <br />
                                   <br />
                                   The alternatives were:
                                   adopt an uncomplicated language, accessible to all, or maintain the language of each researcher, increasing the ability to express ideas clearly, but running the risk of not being understood by the participants whose vernacular was not the same as that of the speaker. The final result of this dialogue was characterised by the necessary convergence, because, in fact, there was no communication barrier between the Latin-speaking researchers. Among them, scientific terms are very similar.
                                   <br />
                                   <br />
                                   From this arose the idea of a meeting of French and Italian theorists, the organisation of which was proposed by Prof. Del Re from Italy, together with his collaborators, F. Momicchioli, A. Rastelli, B. Cadioli, L. Pincelli from Modena.
                              </p>
                         </div>
                    </div>

                    {/* The first meeting */}
                    <div className="info-box">
                         <h1 className="info-title">The first meeting.</h1>
                         <div className="info-text">
                              <p>
                                   The first meeting had been planned for 1968, but due to the political events of that time, it was postponed to the following year (1969). The participants were satisfied with the initiative, and there was an agreement for the next meeting in France, with the participation of Prof. Daudel and his Spanish colleagues, who also joined the 1970 meeting. After this meeting the QUI(CHI)TEL was held in Granada, Spain (1971).
                              </p>

                         </div>
                    </div>

                    {/* The present */}
                    <div className="info-box">
                         <h1 className="info-title">The present.</h1>
                         <div className="info-text">
                              {/* TODO: add the link to the "Venue" page */}
                              <p>
                                   The Meetings from then on alternated between Italy-France-Spain for a period of more than 30 years, when a change occurred through the participation of Belgium, Switzerland and Portugal. In function of the results obtained, Latin America (1974) and, in recent years, Africa have joined QUITEL, thus crowning this great initiative and creating the solid bases for its continuity.
                                   <br />
                                   <br />
                                   Since 2006, QUITEL has alternated between Europe, Africa and America.
                              </p>
                         </div>
                    </div>

               </div>
               <Footer />
          </motion.div >
     )
}
