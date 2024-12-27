// apiClient.ts

import axios from "axios";

// Create axios client with a dynamic base URL
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5003", // Default to local API
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to check the health of the production API and set the correct base URL
export async function checkProdApi() {
  try {
    const response = await axios.get("https://api.tryrue.com/api/health-check"); // Health check for production API
    if (response.status === 200) {
      apiClient.defaults.baseURL = "https://api.tryrue.com"; // Set to production if healthy
      console.log("Production API is reachable, using production API");
    }
  } catch (error) {
    console.error("Error with production API health check:", error);
    console.log("Production API is down, using local API");
  }
}

// Run the health check on client initialization
checkProdApi();

export default apiClient;
