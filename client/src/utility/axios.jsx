import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4500", // api url
  baseURL: "https://evangadifinal.onrender.com/", // api url
  

  withCredentials: true,
});

export default instance;