const preRegisterAPI = "https://api-quitel-production.up.railway.app/pre-registration";
// const registerAPI = "https://api-quitel-production.up.railway.app/registration";

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
               console.log(data);
          })
          .catch(error => {
               // Error handling
               console.error(error);
          });

     // TODO: return
}