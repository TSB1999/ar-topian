import axios from "axios";

export async function createUser(route, form) {
  try {
    const data = await axios.post(route, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (e) {
    return false;
  }
}

export const logInUser = (route, form) => {};
