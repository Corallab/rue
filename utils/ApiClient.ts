import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5003", // Replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
  