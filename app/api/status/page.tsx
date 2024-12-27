'use client'

import { useEffect, useState } from "react";
import { statusConfig } from "@/utils/config"; // Ensure paths are correctly configured

interface TimelineEvent {
  date: string;
  status: string;
  description: string;
}

const StatusPage = () => {
  const [status, setStatus] = useState<string>("loading");
  const [timeline] = useState<TimelineEvent[]>(statusConfig.timeline);

  useEffect(() => {
    const checkApiStatus = async () => {
      const timeout = 5000; // 5 seconds timeout for each request

      const fetchWithTimeout = async (url: string) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
          const response = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId); // Clear timeout on successful response
          return response;
        } catch {
          clearTimeout(timeoutId);
          return null; // Return null if the request times out or fails
        }
      };

      try {
        // First, check the production API's health
        const prodResponse = await fetchWithTimeout(statusConfig.production.statusUrl);

        if (prodResponse && prodResponse.status === 200) {
          setStatus("healthy");
        } else {
          throw new Error("Production API is not healthy");
        }
      } catch {
        console.log("Error connecting to production API, trying local API");

        try {
          // Fallback to the local API health check
          const localResponse = await fetchWithTimeout(statusConfig.local.statusUrl);

          if (localResponse && localResponse.status === 200) {
            setStatus("healthy");
          } else {
            setStatus("offline");
          }
        } catch {
          console.log("Error with both production and local APIs");
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
