import axios from "axios";
import { LOG_IN_ROUTE, REGISTER_ROUTE } from "../0.api/index";

export async function createUser(form) {
  try {
    const data = await axios.post(REGISTER_ROUTE, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (e) {
    return false;
  }
}

export async function logInUser(form) {
  try {
    const data = await axios.post(LOG_IN_ROUTE, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (e) {
    return false;
  }
}
