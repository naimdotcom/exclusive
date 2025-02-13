import axios from "axios";

const axiosinstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_DOMAIN_NAME,
});

export { axiosinstance };
