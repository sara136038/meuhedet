import axios from "axios";

export const firebaseCall = axios.create({
  baseURL: "firebase",
});
