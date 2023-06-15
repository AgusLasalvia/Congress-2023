import Footer from "../../components/Footer/Footer";

export default function Speakers() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <div className="page-wrapper">

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Speakers
                    </p>
                    <p className="page-title-p fees">
                         Preliminary list of confirmed Keynote Speakers
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <ul className="speakers-ul">
                                   <li>Dr. <a href="https://scholar.google.com/citations?user=bDtZleMAAAAJ" rel="noreferrer" target="_blank">Adrian Roitberg</a>. University of Florida. Roitberg Group. Computational Chemistry. USA.</li>

                                   <li>Dr. <a href="https://scholar.google.com/citations?user=4xTOvaMAAAAJ&hl=en" rel="noreferrer" target="_blank">Andrea Cavalli</a>. University of Bologna and Research Director at the Italian Istitute of Tecnology, Genova, Italy</li>

                                   <li>Dr. <a href="https://scholar.google.com/citations?user=p7_WRcAAAAAJ&hl=es" rel="noreferrer" target="_blank">Danilo Gonzalez Nilo</a>.  Center for Bioinformatics and Integrative Biology (CBIB) · Universidad Andrés Bello.</li>

                                   <li>Dra. <a href="https://s3.smu.edu/dedman/catco/elfi-kraka.html" rel="noreferrer" target="_blank">Elfi Kraka</a>, Department of Chemistry, Southern Methodist University, Dallas, Texas, USA.</li>

                                   <li>Dr. <a href="https://scholar.google.ca/citations?user=84Uf_T0AAAAJ" rel="noreferrer" target="_blank">Benoit Champagne</a>, Laboratory of Theoretical Chemistry, University of Namur, Belgium.</li>

                                   <li>Dr. <a href="https://scholar.google.es/citations?user=AcIVuwMAAAAJ" rel="noreferrer" target="_blank">Alejandro Toro-Labbé</a>, Laboratorio de Química Teórica Computacional (QTC), Pontificia Universidad Católica de Chile.</li>

                                   <li>Dr. <a href="https://scholar.google.com.br/citations?user=IQFmoEgAAAAJ" rel="noreferrer" target="_blank">Julio Sambrano</a>, Modelling and Computational Simulation Group, DM, UNESP. Brazil</li>

                                   <li>Dr. <a href="https://scholar.google.com.co/citations?user=-j4-Do4AAAAJ" rel="noreferrer" target="_blank">Gian Pietro Miscione</a>, Computational Bio-Organic Chemistry Bogotá (COBO), Universidad de Los Andes, Bogotá, Colombia.</li>

                                   <li>Dr. <a href="https://scholar.google.com/citations?user=OHmp6A4AAAAJ&hl=nl" rel="noreferrer" target="_blank">Elson Longo</a>, Universidade Federal de São Carlos, São Carlos, Brasil</li>
                              </ul>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}
