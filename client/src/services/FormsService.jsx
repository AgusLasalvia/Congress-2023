const preRegisterAPI = "https://api-quitel-production.up.railway.app/pre-registration";
const registerAPI = "https://api-quitel-production.up.railway.app/registration";

// preRegistration object 
export const preRegistration = {
     email: "",
     firstName: "",
     lastName: "",
     gender: "",
     educationLevel: "",
     country: "",
     mainInstitution: "",
     hasAttended: "",
     mail: "",
}

// registration object 
export const registration = {
     email: "",
     firstName: "",
     lastName: "",
     gender: "",
     educationLevel: "",
     position: "",
     mainInstitution: "",
     institutionalAddress: "",
     country: "",
     region: "",
     city: "",
     zipCode: "",
     modality: "",
     firstTime: "",
     specialMealReqs: "",
     motherLanguage: "",
     registrationPaymentReceipt: null,
     dinnerPaymentReceipt: null,
     accompanyingPaymentReceipt: null,
}


// pre registration POST
export const sendPreRegistration = (formData) => {
     fetch(preRegisterAPI, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({ preRegistration: formData })
     })
          .then(response => response.json())
          .then(data => {
               // API response
               console.log("data: " + data);
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
          });

     // TODO: return
}


// registration POST
export const sendRegistration = (formData) => {
     fetch(registerAPI, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({ registration: formData })
     })
          .then(response => response.json())
          .then(data => {
               // API response
               console.log("data: " + data);
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
          });

     // TODO: return
}