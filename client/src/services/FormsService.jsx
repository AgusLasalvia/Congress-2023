const preRegisterAPI = "https://api-quitel-production.up.railway.app/pre-registration";
const registerAPI = "https://api-quitel-production.up.railway.app/registration-data";
const registerReceiptsAPI = "https://api-quitel-production.up.railway.app/registration-files";

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
}

export const fileReceipts = {
     registrationPaymentReceipt: null,
     dinnerPaymentReceipt: null,
     accompanyingPaymentReceipt: null,
}


// pre registration POST
export const sendPreRegistration = (formData, navigateOnSuccess, setErrorMessage) => {
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
               switch (data) {
                    case "success":
                         navigateOnSuccess();
                         break;
                    case "already-pre-registered":
                         setErrorMessage("The email provided is already pre-registered");
                         break;
                    default:
                         console.log("data: " + data);
                         setErrorMessage(data);
                         break;
               }
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
               setErrorMessage("An unexpected error ocurred.");
          });

     // TODO: return
}


// formData.registrationPaymentReceipt = receipts.registrationPaymentReceipt;
// formData.dinnerPaymentReceipt = receipts.dinnerPaymentReceipt;
// formData.accompanyingPaymentReceipt = receipts.accompanyingPaymentReceipt;

// const appendedFiles = new FormData();
// appendedFiles.append('data', formData);

// appendedFiles.append('registration', files.registrationPaymentReceipt);
// appendedFiles.append('dinner', files.dinnerPaymentReceipt);
// appendedFiles.append('accompanying', files.accompanyingPaymentReceipt);

// registration.receipts = appendedFiles;


// registration POST
export const sendRegistration = (formData, navigateOnSuccess, setErrorMessage) => {

     console.log(formData);

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
               switch (data) {
                    case "success":
                         navigateOnSuccess();
                         break;
                    case "already registered":
                         setErrorMessage("The email provided is already registered");
                         break;
                    default:
                         console.log("data: " + data);
                         setErrorMessage(data);
                         break;
               }
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
               setErrorMessage(error.message);
          });

}

// registration receipts POST
export const sendReceipts = (files) => {
     console.log(files);

     const appendedFiles = new FormData();
     appendedFiles.append('registration', files.registrationPaymentReceipt);
     appendedFiles.append('dinner', files.dinnerPaymentReceipt);
     appendedFiles.append('accompanying', files.accompanyingPaymentReceipt);

     fetch(registerReceiptsAPI, {
          method: 'POST',
          body: appendedFiles
     })
          .then(response => response.json())
          .then(data => {
               // API response
               console.log("data: " + data);

          })
          .catch(error => {
               // Error handling
               console.error("error: " + error.message);
               // setErrorMessage(error.message);
          });

}