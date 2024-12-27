import axios from "axios";

// Create axios client with a dynamic base URL from environment variable
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5003", // Default to local if not set
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
