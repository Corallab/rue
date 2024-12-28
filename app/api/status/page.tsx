'use client';

import React, { useEffect, useState } from "react";
import apiClient from "@/utils/ApiClient"; // Import your apiClient

interface TimelineEvent {
  date: string;
  status: string;
  description: string;
}

const StatusPage = () => {
  const [status, setStatus] = useState<string>("loading");
  const [timeline] = useState<TimelineEvent[]>([
    { date: "2023-12-01", status: "All Systems Operational", description: "API was fully operational." },
    { date: "2023-12-02", status: "Degraded Performance", description: "Intermittent delays in response time." },
    // More events as needed...
  ]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const checkApiStatus = async () => {
      setStatus("loading");
      setError("");

      try {
        // Checking the production API status
        const prodResponse = await apiClient.get("/api/health-check"); // Adjust to your actual health check endpoint
        if (prodResponse.status === 200) {
          setStatus("healthy");
        } else {
          throw new Error("Production API is not healthy");
        }
      } catch (err) {
        console.log("Error connecting to production API:", err);  // Log the error
        setError("Error connecting to production API");

        try {
          // Fallback to the local API health check
          const localResponse = await apiClient.get("/api/health-check"); // Adjust for local check
          if (localResponse.status === 200) {
            setStatus("healthy");
          } else {
            setStatus("offline");
          }
        } catch (err) {
          console.log("Error with both production and local APIs:", err);
          setError("Error with both production and local APIs");
          setStatus("offline");
        }
      }
    };

    // Check API status on component mount
    checkApiStatus();
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-10 text-white">
      <div className="text-center w-full max-w-4xl p-6">
        <h1 className="text-5xl font-extrabold text-white mb-6">API Status</h1>

        {status === "loading" && (
          <div className="text-xl text-gray-500">Loading...</div>
        )}

        {status === "healthy" && (
          <div className="text-2xl text-green-500 font-bold mb-6">
            The API is <span className="font-extrabold">Healthy</span>.
            <p className="text-lg text-gray-400 mt-2">All systems are operational and working as expected.</p>
          </div>
        )}

        {status === "offline" && (
          <div className="text-2xl text-red-500 font-bold mb-6">
            The API is <span className="font-extrabold">Offline</span>.
            <p className="text-lg text-gray-400 mt-2">There seems to be an issue. Please try again later.</p>
          </div>
        )}

        {error && (
          <div className="text-xl text-red-500 mt-4">{error}</div>
        )}

        <div className="mt-8 space-y-4">
          <h2 className="text-3xl font-semibold text-white mb-4">Status Timeline</h2>
          <div className="space-y-4">
            {timeline.map((update, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-md">
                <div className="flex-1 text-left">
                  <p className="text-lg text-white font-semibold">{update.date}</p>
                  <p className="text-sm text-gray-400">{update.status}</p>
                  <p className="text-sm text-gray-500">{update.description}</p>
                </div>
                <div
                  className={`text-3xl ${update.status === "All Systems Operational" ? "text-green-400" : "text-yellow-400"}`}
                >
                  {update.status === "All Systems Operational" ? "✅" : "⚠️"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
