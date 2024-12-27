import axios from "axios";

// Create axios client with a dynamic base URL from environment variable
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Default to local if not set
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
