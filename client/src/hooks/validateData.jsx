export const validateData = (obj) => {

     // checks if any property in the object is null or empty, such as strings and arrays or arrays with a single empty string
     if (Object.values(obj).some(x => x === null || x === '' || x.length === 0 || x[0] === '')) {
          return false;
     } else {
          return true;
     }

}