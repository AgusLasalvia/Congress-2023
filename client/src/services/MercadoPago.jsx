/* eslint react/prop-types: 0 */
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { checkIsMobile } from "../hooks/checkIsMobile";

// ----------------- ACA ADENTRO VA UN ENV ---------------------
initMercadoPago('TEST-5353f92b-e4e8-4f5a-aff1-3724650b3cca');
// -------------------------------------------------------------

export default function MPButton({ feeSelection }) {

     // ACA TAMBIÉN KKKK
     const createPreferenceURL = "https://api-quitel-production.up.railway.app/create_preference"

     const [isDisabled, setIsDisabled] = useState(false);
     const [preferenceId, setPreferenceId] = useState(null);


     // Re-renders the component and sets the preferenceId to null when user selects another Registration fee (feeSelection)
     useEffect(() => {
          setPreferenceId(null);
     }, [feeSelection]);


     // Creates a preference according to the selected fee, then gets back an ID to create a specific button for that fee.
     // *Price is set on the Backend depending on the selected fee sent.
     const createPreference = async () => {
          try {
               const response = await axios.post(createPreferenceURL, {
                    description: feeSelection,
               });

               // {id} is the same as: response.data.id
               const { id } = response.data;
               return id;
          } catch (error) {
               console.log(error.message);
          }
     }

     // Disables the button and makes a call to createPreference(), then re-enables the button once there is an ID.
     const handleBuy = async () => {
          setIsDisabled(true);
          const id = await createPreference();
          if (id) {
               setPreferenceId(id);
               setIsDisabled(false);
          }
     }

     // MercadoPago button styles
     const customization = {
          visual: {
               borderRadius: '12px',
               buttonHeight: checkIsMobile() ? "53px" : "70px",
          },
          texts: {
               action: 'pay',
               valueProp: 'security_details',
          },
     }

     return (
          <div className="mercado-pago">
               {!preferenceId && <div className="button-long-MP" onClick={isDisabled ? null : handleBuy}>{isDisabled ? "Loading..." : "Mercado Pago"}</div>}
               {preferenceId && <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} customization={customization} />}
          </div>
     )
}
