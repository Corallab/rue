import axios from "axios";

// Create axios client with a dynamic base URL
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5003", // Default to local API
  headers: {
    "Content-Type": "application/json",
  },
});

// Create a function to check the production API status and set the correct base URL
async function checkProdApi() {
  try {
    const response = await axios.get("https://api.tryrue.com/health-check"); // Health check endpoint for production API
    if (response.status === 200) {
      // Set the base URL to the production API if the health check passes
      apiClient.defaults.baseURL = "https://api.tryrue.com"; // Use production API
      console.log("Production API is reachable, using production API");
    }
  } catch (error) {
    console.error("Error with production API health check:", error);
    console.log("Production API is down, using local API");
  }
}

// Run the function to check the production API and adjust the base URL
checkProdApi();

export default apiClient;
