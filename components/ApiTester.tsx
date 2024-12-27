"use client";

import React, { useState } from "react";
import axios from "axios";

// Define a specific type for the response object
interface ApiResponse {
  // Define the expected structure of the API response here
  data: string; // You can adjust this type based on the actual response format
}

interface SelectedFields {
  type: boolean;
  category: boolean;
  summary: boolean;
  categoryConfidenceScore: boolean;
  phoneNumbers: boolean;
  emails: boolean;
  socialMediaLinks: boolean;
  reviewLinks: boolean;
  websiteMetadata: boolean;
  url: boolean;
  whois_data: boolean;
  adverseMedia: boolean;
}

interface ApiTesterProps {
  apiUrl: string;
}

const ApiTester: React.FC<ApiTesterProps> = ({ apiUrl }) => {
  const [apiKey, setApiKey] = useState<string>(""); // Explicit type for state
  const [secretKey, setSecretKey] = useState<string>(""); // Explicit type for state
  const [inputString, setInputString] = useState<string>(""); // Explicit type for state
  const [categories, setCategories] = useState<string>(""); // Explicit type for state
  const [highRiskCategories, setHighRiskCategories] = useState<string>(""); // Explicit type for state
  const [response, setResponse] = useState<ApiResponse | null>(null); // Explicit type for response
  const [loading, setLoading] = useState<boolean>(false); // Explicit type for loading state
  const [error, setError] = useState<string>(""); // Explicit type for error message

  const [selectedFields, setSelectedFields] = useState<SelectedFields>({
    type: true,
    category: true,
    summary: true,
    categoryConfidenceScore: true,
    phoneNumbers: true,
    emails: true,
    socialMediaLinks: true,
    reviewLinks: true,
    websiteMetadata: true,
    url: true,
    whois_data: true,
    adverseMedia: true,
  });

  const handleFieldChange = (field: keyof SelectedFields) => {
    setSelectedFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await axios.post(
        apiUrl,
        {
          input_string: inputString,
          custom_categories: categories.split(",").map((cat) => cat.trim()),
          custom_high_risk_categories: highRiskCategories
            .split(",")
            .map((cat) => cat.trim()),
          include_whois: selectedFields.whois_data,
          include_adverse_media: selectedFields.adverseMedia,
          selected_fields: selectedFields,
        },
        {
          headers: {
            "X-API-Key": apiKey,
            "X-Secret-Key": secretKey,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Capture the error message if it's an instance of Error
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // Update example credentials with separate statements
  const handleUseExampleCredentials = () => {
    setApiKey("staging_api_key_12345abcde67890xyz");
    setSecretKey("staging_secret_key_abcd1234xyz7890qwe");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Try Our Web Presence API</h1>
          <button
            onClick={handleUseExampleCredentials}
            className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
          >
            Use Example Credentials
          </button>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
              placeholder="Enter Email or URL"
              className="w-full p-2 rounded-md mb-4"
            />
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="Custom Categories (comma-separated)"
              className="w-full p-2 rounded-md mb-4"
            />
            <input
              type="text"
              value={highRiskCategories}
              onChange={(e) => setHighRiskCategories(e.target.value)}
              placeholder="High-Risk Categories (comma-separated)"
              className="w-full p-2 rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Select Fields to Return:</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(selectedFields).map((field) => (
                <div key={field} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFields[field as keyof SelectedFields]}
                    onChange={() => handleFieldChange(field as keyof SelectedFields)}
                  />
                  <label>{field}</label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-full mt-6 px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Loading..." : "Test API"}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        </div>

        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">API Response</h2>
          <div className="bg-gray-900 p-4 rounded-md text-sm overflow-auto h-96">
            {response ? (
              <pre className="whitespace-pre-wrap text-green-400">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-500">json</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiTester;
