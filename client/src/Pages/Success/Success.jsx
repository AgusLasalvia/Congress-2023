import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Success() {
     return (
          <motion.div className="error"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               <img src="assets/svg/quitel-letters.svg" alt="" className="quitel-letters" />
               <h1 className="error-h1">Great! Your form was sent successfuly</h1>
               <br />
               <NavLink to="/Quitel/">Go to the homepage</NavLink>
          </motion.div>
     )
}
