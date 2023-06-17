/* eslint react/prop-types: 0 */

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Step1({ setFormData, formData }) {
     useEffect(() => {
          // Scrolls to top when rendered.
          // Otherwise when switching routes the user would remain at the same Y position in the window.
          window.scrollTo(0, 0);

     }, [])

     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               {/* Email */}
               <div className="form-input-wrapper form-first">
                    <label className="form-label" htmlFor="Email">Email</label>
                    <input className="form-input" type="email" id="email" name="Email"
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
               </div>

               {/* First name */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="FirstName">First name</label>
                    <input className="form-input" type="text" id="firstname" name="FirstName"
                         value={formData.firstName}
                         onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
               </div>

               {/* Last name */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="LastName">Last name</label>
                    <input className="form-input" type="text" id="lastname" name="LastName"
                         value={formData.lastName}
                         onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
               </div>

               {/* Gender */}
               <div className="form-input-wrapper">
                    <label className="form-label" htmlFor="Gender">Gender</label>
                    <select name="Gender" id="gender-select" className="form-select"
                         value={formData.gender}
                         onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    >
                         <option value="" disabled hidden>Select your gender</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="nonbinary">Non binary</option>
                         <option value="other">Other</option>
                    </select>
               </div>
          </motion.div>
     )
}