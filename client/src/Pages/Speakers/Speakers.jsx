import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function Speakers() {
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
                         Speakers
                    </p>
                    <p className="page-title-p fees">
                         Preliminary list of confirmed Speakers
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <ul className="speakers-ul">
                                   <li>Dr. <a href="https://scholar.google.com/citations?user=bDtZleMAAAAJ" rel="noreferrer" target="_blank">Adrian Roitberg</a>. University of Florida. Roitberg Group. Computational Chemistry. USA.</li>

                                   <li>Dra. <a href="https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=29020&datos_academicos=yes" rel="noreferrer" target="_blank">Mónica Pickholz</a>. Facultad de Ciencias Exactas y Naturales. Argentina. CONICET-Universidad de Buenos Aires. IFIBA, Buenos Aires, Argentina.</li>

                                   <li>Prof. <a href="https://scholar.google.com/citations?user=4xTOvaMAAAAJ&hl=en" rel="noreferrer" target="_blank">Andrea Cavalli</a>. Director, Centre Européen de Calcul Atomique et Moléculaire Ecole Polytechnique Fédérale de Lausanne (EPFL), Switzerland.</li>

                                   <li>Dr. <a href="https://scholar.google.com/citations?user=p7_WRcAAAAAJ&hl=es" rel="noreferrer" target="_blank">Danilo Gonzalez Nilo</a>.  Center for Bioinformatics and Integrative Biology (CBIB) · Universidad Andrés Bello.</li>

                                   <li>Dra. <a href="https://s3.smu.edu/dedman/catco/elfi-kraka.html" rel="noreferrer" target="_blank">Elfi Kraka</a>. Department of Chemistry, Southern Methodist University, Dallas, Texas, USA.</li>

                                   <li>Dr. <a href="https://scholar.google.ca/citations?user=84Uf_T0AAAAJ" rel="noreferrer" target="_blank">Benoit Champagne</a>. Laboratory of Theoretical Chemistry, University of Namur, Belgium.</li>

                                   <li>Dra. <a href="https://www.researchgate.net/profile/Taamalli-Sonia-2" rel="noreferrer" target="_blank">Sonia Taamalli</a>. Université de Lille, CNRS, UMR 8522 - PC2A - PhysicoChimie des Processus de Combustion et de l&apos;Atmosphère. Lille, France</li>

                                   <li>Dr. <a href="https://scholar.google.es/citations?user=AcIVuwMAAAAJ" rel="noreferrer" target="_blank">Alejandro Toro-Labbé</a>. Laboratorio de Química Teórica Computacional (QTC), Pontificia Universidad Católica de Chile.</li>

                                   <li>Dr. <a href="#" rel="noreferrer" target="_blank">Ana Valeria Lourenco</a>. Universidade Estadual do Maranhão. São Luís, Brazil.</li>

                                   <li>Dr. <a href="https://scholar.google.com.br/citations?user=IQFmoEgAAAAJ" rel="noreferrer" target="_blank">Julio Sambrano</a>. Modelling and Computational Simulation Group, DM, UNESP. Brazil.</li>

                                   <li>Dr. <a href="https://scholar.google.com.co/citations?user=-j4-Do4AAAAJ" rel="noreferrer" target="_blank">Gian Pietro Miscione</a>. Computational Bio-Organic Chemistry Bogotá (COBO), Universidad de Los Andes, Bogotá, Colombia.</li>

                                   <li>Dra. <a href="https://www.uantwerpen.be/en/staff/ana-cunha_23562/" rel="noreferrer" target="_blank">Ana Cunha</a>. University of Antwerp, Groenenborgerlaan 171, 2020 Antwerp. Belgium.</li>

                                   <li>Dr. <a href="https://scholar.google.com/citations?user=OHmp6A4AAAAJ&hl=nl" rel="noreferrer" target="_blank">Elson Longo</a>. Universidade Federal de São Carlos, São Carlos, Brasil.</li>

                                   <li>Dra. <a href="https://www.conicet.gov.ar/new_scp/detalle.php?id=35618&datos_academicos=yes" rel="noreferrer" target="_blank">Luciana Capece</a>. Departamento de Química Inorgánica, Analítica y Química Física, Facultad de Ciencias Exactas y Naturales, Instituto de Química Física de los Materiales, Medio Ambiente y Energía (INQUIMAE CONICET), Universidad de Buenos Aires. Buenos Aires, Argentina.</li>

                                   <li>Dr. <a href="https://ri.conicet.gov.ar/author/1709" rel="noreferrer" target="_blank">Alfredo Juan</a>. Department of Physics Universidad Nacional del Sur, Bahía Blanca, Argentina.</li>

                                   <li>Dra. <a href="https://researchportal.bath.ac.uk/en/persons/carmen-domene" rel="noreferrer" target="_blank">Carmen Domene</a>.  University of Bath. England.</li>

                                   <li>Prof. <a href="https://scholar.google.es/citations?user=YJzlGLQAAAAJ&hl=es" rel="noreferrer" target="_blank">Iñaki Tuñón</a>. Departamento de Química Fisica, Universidad de Valencia, Spain.</li>
                              </ul>

                         </div>
                         <br />
                         <a className="button-long-blue" href="assets/files/schedule-quitel2023.pdf" download>Download program</a>
                    </div>
               </div>
               <Footer />
          </motion.div>
     )
}
