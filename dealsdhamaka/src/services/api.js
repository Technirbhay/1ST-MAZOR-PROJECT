import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// NAMED EXPORT
export const fetchDeals = () => API.get("/deals");

// DEFAULT EXPORT
export default API;
