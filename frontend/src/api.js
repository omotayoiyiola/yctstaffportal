import axios from "axios";

export const userRequest = axios.create({
  baseURL: "https://backendyctstaff.omotayoiyiola.com:3000",
});
