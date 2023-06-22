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
          // console.log("orientation changed");
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
          navigate("/Quitel/");
     }

     useEffect(() => {
          // console.log("isMobile: " + isMobile);
          // console.log("landscape mode: " + isLandscape);
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

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/">Home</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/about">About</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/committees">Committees</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/registration">Registration</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/speakers">Speakers</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/abstract-submission">Abstract submission</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/venue">Venue</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/hotel">Hotel</NavLink>
                              </motion.li>

                              <motion.li whileHover={{ scale: [null, 1.15, 1.10] }} transition={{ duration: 0.2 }} whileTap={{ scale: 1 }}>
                                   <NavLink className="nav-link" to="/Quitel/contact">Contact us</NavLink>
                              </motion.li>

                         </ul >
                         {/* menu stamp */}
                         <img src="assets/images/stamp.png" alt="QUITEL 2023" className="menu-stamp" id="menuStamp" />
                    </nav>
               </div>

          </header >
     )
}