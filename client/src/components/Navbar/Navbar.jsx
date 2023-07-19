import { NavLink, useNavigate } from "react-router-dom";
import { checkIsMobile } from "../../hooks/checkIsMobile";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {

     const isMobile = checkIsMobile();
     const [isLandscape, setIsLandscape] = useState(window.orientation == 90 ? true : false);
     const navigate = useNavigate();
     window.addEventListener("orientationchange", () => {
          setIsLandscape(!isLandscape);
     });

     // Toggles css .open class on nav component
     const showNav = () => {
          document.getElementById("nav").classList.toggle("open");
     }

     if (window.matchMedia("only screen and (max-width: 1366px)").matches) {
          // listens for clicks outside the mobile menu to close it 
          document.onclick = function (clickEvent) {
               if (clickEvent.target.id !== 'nav' && clickEvent.target.id !== 'checkbox' && clickEvent.target.id !== 'menuStamp') {
                    document.getElementById("nav").classList.remove("open");
                    document.getElementById("checkbox").checked = false;
               }
          }
     }

     const navigateHome = () => {
          navigate("/");
     }

     useEffect(() => {
     }, [isLandscape, isMobile])

     return (
          <header>
               {/* arch bg */}
               <div className="header-visible">
                    {isMobile ?
                         isLandscape ? (
                              // isMobile && isLandscape
                              <img className="nav-arch" src="assets/svg/arch-landscape.svg" alt="" />
                         ) : (
                              // isMobile && !isLandscape
                              <img className="nav-arch" src="assets/svg/arch-portrait.svg" alt="" />
                         ) : (
                              // !isMobile && !isLandscape (Desktops)
                              <img className="nav-arch" src="assets/svg/arch-landscape.svg" alt="" />
                         )
                    }

                    {/* stamp */}
                    <img src="assets/images/stamp.png" alt="QUITEL 2023" className="stamp" onClick={navigateHome} />

                    {/* hamburguer menu */}
                    <div id="menu-toggle">
                         <input type="checkbox" id="checkbox" onClick={showNav} />
                         <span></span>
                         <span></span>
                         <span></span>
                    </div >

                    {/* nav */}
                    <nav role="navigation" id="nav">
                         <ul id="menu">

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/">Home</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/about">About</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/committees">Committees</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/registration">Registration</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/speakers">Speakers</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/abstract-submission">Abstract submission</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/venue">Venue</NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <motion.NavLink className="nav-link" to="/hotel">Hotel</motion.NavLink>
                              </motion.li>

                              <motion.li transition={{ duration: 0.1 }} whileTap={{ scale: 0.9 }}>
                                   <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                              </motion.li>

                         </ul >
                         {/* menu stamp */}
                         <img src="assets/images/stamp.png" alt="QUITEL 2023" className="menu-stamp" id="menuStamp" />
                    </nav>
               </div>

          </header >
     )
}