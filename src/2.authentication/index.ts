import axios from "axios";

export const createUser = (route, form) => {
  axios
    .post(route, form, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);

      // page redirect
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logInUser = (route, form) => {};
