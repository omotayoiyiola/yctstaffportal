import axios from "axios";

export const userRequest = axios.create({
  baseURL: "http://localhost:5000",
});
