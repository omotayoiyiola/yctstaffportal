import axios from "axios";

export const userRequest = axios.create({
  baseURL: "http://backendyctstaff.omotayoiyiola.com:3000",
});
