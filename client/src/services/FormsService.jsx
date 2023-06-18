const preRegistrationURL = import.meta.env.VITE_REACT_PREREGISTRATION;
const registrationURL = import.meta.env.VITE_REACT_REGISTRATION;
const registrationReceiptsURL = import.meta.env.VITE_REACT_REGISTRATIONFILES;
const abstractURL = import.meta.env.VITE_REACT_ABSTRACT;
const abstractFilesURL = import.meta.env.VITE_REACT_ABSTRACTFILES;

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

// receipt files object
export const fileReceipts = {
     registrationPaymentReceipt: null,
     dinnerPaymentReceipt: null,
     accompanyingPaymentReceipt: null,
}

// abstract object
export const abstract = {
     email: "",
     firstName: "",
     lastName: "",
     title: "",
}

// abstract files object
export const abstractFiles = {
     editableFormat: null,
     pdfFormat: null,
}

// ------------------------------------------------------------------------------------------------
// pre registration POST
// ------------------------------------------------------------------------------------------------
export const sendPreRegistration = (formData, navigateOnSuccess, setErrorMessage, setIsDisabled) => {
     fetch(preRegistrationURL, {
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
               // "re-enables" the button
               setIsDisabled(false);
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
               setErrorMessage("An unexpected error ocurred.");
               // "re-enables" the button
               setIsDisabled(false);
          });
}


// ------------------------------------------------------------------------------------------------
// registration POST
// ------------------------------------------------------------------------------------------------
export const sendRegistration = (formData, navigateOnSuccess, setErrorMessage, setIsDisabled) => {

     // console.log(formData);

     fetch(registrationURL, {
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
                    case "already-registered":
                         setErrorMessage("The email provided is already registered");
                         break;
                    default:
                         console.log("data: " + data);
                         setErrorMessage(data);
                         break;
               }
               // "re-enables" the button
               setIsDisabled(false);
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
               setErrorMessage(error.message);
               // "re-enables" the button
               setIsDisabled(false);
          });
}


// ------------------------------------------------------------------------------------------------
// registration receipts POST
// ------------------------------------------------------------------------------------------------
export const sendReceipts = (files) => {
     // console.log(files);

     const appendedFiles = new FormData();
     appendedFiles.append('registration', files.registrationPaymentReceipt);
     appendedFiles.append('dinner', files.dinnerPaymentReceipt);
     appendedFiles.append('accompanying', files.accompanyingPaymentReceipt);

     fetch(registrationReceiptsURL, {
          method: 'POST',
          // No 'Content-Type' so that the browser will automatically use the adequate kind. 
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


// ------------------------------------------------------------------------------------------------
// abstract POST
// ------------------------------------------------------------------------------------------------
export const sendAbstract = (formData, navigateOnSuccess, setErrorMessage, setIsDisabled) => {
     fetch(abstractURL, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({ abstract: formData })
     })
          .then(response => response.json())
          .then(data => {
               // API response
               console.log("data: " + data);
               switch (data) {
                    case "submitted-successfully":
                         navigateOnSuccess();
                         break;
                    case "already-submitted":
                         setErrorMessage("The email provided has already sent an abstract");
                         break;
                    default:
                         console.log("data: " + data);
                         setErrorMessage(data);
                         break;
               }
               // "re-enables" the button
               setIsDisabled(false);
          })
          .catch(error => {
               // Error handling
               console.error("error: " + error);
               setErrorMessage(error.message);
               // "re-enables" the button
               setIsDisabled(false);
          });
}


// ------------------------------------------------------------------------------------------------
// abstract files POST
// ------------------------------------------------------------------------------------------------
export const sendAbstractFiles = (files) => {
     // console.log(files);

     const appendedFiles = new FormData();
     appendedFiles.append('registration', files.registrationPaymentReceipt);
     appendedFiles.append('dinner', files.dinnerPaymentReceipt);
     appendedFiles.append('accompanying', files.accompanyingPaymentReceipt);

     fetch(abstractFilesURL, {
          method: 'POST',
          // No 'Content-Type' so that the browser will automatically use the adequate kind. 
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