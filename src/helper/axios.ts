import axios from "axios";

const axiosinstance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_DOMAIN_NAME ||
    "https://exclusive-yp69.onrender.com/api/v1",
  withCredentials: true,
});

export { axiosinstance };
