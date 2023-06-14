/* eslint react/prop-types: 0 */
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useEffect } from "react";


export default function PayPalTest({ feeSelection }) {
     console.log(feeSelection)

     // useEffect(() => {
     //      console.log("hol apelado")
     // }, [feeSelection])

     return (
          <PayPalScriptProvider className="paypal-buttons" options={{ "client-id": "AUNoHsYquqTOcMmPBWgAPdPF-2rQahxmpeRxBGfANvlbbTvEvQHYm7PMH02Fp3JDnsSiSDNQ3s4f1Jrq" }}>
               {feeSelection == "postdocs" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Postdocs / Researchers / Professors",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "405.00",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "phdstudents" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Master / PhD Students",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "271.00",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "undergraduates" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Undergraduate Students",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "225.00",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "accompanying" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Accompanying",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "180.00",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }
               {feeSelection == "dinner" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Dinner",
                                             amount: {
                                                  currency_code: "USD",
                                                  // CHANGE THIS VALUE BACK TO 40.00 UNITED STATES DOLLARS FROM THE FEDERAL RESERVE OF NORTH AMERICA (DOLARES AMERICANOS 40.00)
                                                  value: "40.00",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }



               {/* 

               {(() => {
                    switch (feeSelection) {
                         case "postdocs":
                              return <PayPalButtons className="paypal-buttons"
                                   createOrder={(data, actions) => {
                                        return actions.order.create({
                                             purchase_units: [
                                                  {
                                                       description: "Postdocs / Researchers / Professors",
                                                       amount: {
                                                            currency_code: "USD",
                                                            value: "405.00",
                                                       },
                                                  },
                                             ],
                                        });
                                   }}
                              />

                         case "phdstudents":
                              return <PayPalButtons className="paypal-buttons"
                                   createOrder={(data, actions) => {
                                        return actions.order.create({
                                             purchase_units: [
                                                  {
                                                       description: "Master / PhD Students",
                                                       amount: {
                                                            currency_code: "USD",
                                                            value: "271.00",
                                                       },
                                                  },
                                             ],
                                        });
                                   }}
                              />

                         case "undergraduates":
                              return <PayPalButtons className="paypal-buttons"
                                   createOrder={(data, actions) => {
                                        return actions.order.create({
                                             purchase_units: [
                                                  {
                                                       description: "Undergraduate Students",
                                                       amount: {
                                                            currency_code: "USD",
                                                            value: "225.00",
                                                       },
                                                  },
                                             ],
                                        });
                                   }}
                              />

                         case "accompanying":
                              return <PayPalButtons className="paypal-buttons"
                                   createOrder={(data, actions) => {
                                        return actions.order.create({
                                             purchase_units: [
                                                  {
                                                       description: "Accompanying",
                                                       amount: {
                                                            currency_code: "USD",
                                                            value: "180.00",
                                                       },
                                                  },
                                             ],
                                        });
                                   }}
                              />

                         case "dinner":
                              return <PayPalButtons className="paypal-buttons"
                                   createOrder={(data, actions) => {
                                        return actions.order.create({
                                             purchase_units: [
                                                  {
                                                       description: "Dinner",
                                                       amount: {
                                                            currency_code: "USD",
                                                            // CHANGE THIS VALUE BACK TO 40.00 UNITED STATES DOLLARS FROM THE FEDERAL RESERVE OF NORTH AMERICA (DOLARES AMERICANOS 40.00)
                                                            value: "1.00",
                                                       },
                                                  },
                                             ],
                                        });
                                   }}
                              />

                         default:
                              return null
                    }
               })()} */}

          </PayPalScriptProvider>
     );
}
