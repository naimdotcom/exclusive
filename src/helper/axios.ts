import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export { axiosinstance };
