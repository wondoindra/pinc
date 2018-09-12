import request from "../axios/helper";

const login = (URL, data) => {
  return new Promise((resolve, reject) => {
    request
      .post(URL, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.log(error.response.data);
        reject(error.response);
      });
  });
};

export default login;
