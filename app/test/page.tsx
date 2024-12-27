'use client'

import { useEffect, useState } from "react";

const HealthCheck = () => {
  const [status, setStatus] = useState<string>("loading");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("https://api.tryrue.com/api/health-check");

        if (response.ok) {
          setStatus("healthy");
        } else {
          setStatus("offline");
        }
      } catch (error) {
        console.error("Error while checking health:", error);
        setStatus("offline");
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">API Health Check</h1>
      {status === "loading" && <p className="text-lg text-gray-300">Checking API...</p>}
      {status === "healthy" && (
        <div className="bg-green-500 p-4 rounded-md">
          <p className="text-xl">The API is <strong>Healthy</strong>.</p>
        </div>
      )}
      {status === "offline" && (
        <div className="bg-red-500 p-4 rounded-md">
          <p className="text-xl">The API is <strong>Offline</strong>.</p>
        </div>
      )}
    </div>
  );
};

export default HealthCheck;
