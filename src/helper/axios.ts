import axios from "axios";

const axiosinstance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_DOMAIN_NAME || "http://localhost:3000/api/v1",
  withCredentials: true,
});

export { axiosinstance };
