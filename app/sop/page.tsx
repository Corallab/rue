'use client';

import React, { useState } from "react";
import apiClient from "@/utils/ApiClient"; // Import the apiClient
import ReactQuill from "react-quill"; // Import Quill editor
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { marked } from 'marked'; // Import the markdown-to-html converter
import fileDownload from 'js-file-download'; // Import file download
import { BsStars } from "react-icons/bs"; // Import the BsStars icon
import { FaEye, FaDownload } from "react-icons/fa"; // Import the icons for view and save

interface ApiResponse {
  status: string;
  sop_document: string;
}

const SOPTester: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [inputPrompt, setInputPrompt] = useState<string>(""); // SOP input from user
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [editorContent, setEditorContent] = useState<string>("");
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false); // Editable state for Quill
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true); // To toggle non-editable state
  const [showSopModal, setShowSopModal] = useState<boolean>(false);

  // Example prompts for dropdown
  const examplePrompts = [
    "SOP for Compliance Checks",
    "SOP for KYC (Know Your Customer) Process",
    "SOP for KYB (Know Your Business) Checks",
    "SOP for Handling Case Management in Compliance"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    const promptToSend = inputPrompt || selectedExample || null; // If no template is selected, send null or custom prompt

    try {
      const res = await apiClient.post(
        "http://127.0.0.1:5003/api/generate_sop", // Local API endpoint for testing
        {
          prompt: promptToSend, // Use selected example or custom prompt
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
      const htmlContent = marked(res.data.sop_document); // Convert Markdown to HTML
      setEditorContent(htmlContent); // Load SOP into the editor as HTML
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUseExampleCredentials = () => {
    setApiKey("staging_api_key_12345abcde67890xyz");
    setSecretKey("staging_secret_key_abcd1234xyz7890qwe");
  };

  // Export SOP as a DOC file
  const handleExportDoc = () => {
    if (response && response.sop_document) {
      const doc = `
        <html>
          <head><title>SOP</title></head>
          <body>
            <h1>Standard Operating Procedure</h1>
            <p>${response.sop_document.replace(/\n/g, '<br/>')}</p>
          </body>
        </html>
      `;
      const blob = new Blob([doc], { type: 'application/msword' });
      fileDownload(blob, 'SOP.doc');
    }
  };

  // Toggle between editable and read-only mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setIsReadOnly(!isReadOnly); // Toggle non-editable mode
  };

  const handleSopModal = () => setShowSopModal(!showSopModal);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-lg border border-gray-300">
          <h1 className="text-3xl font-semibold mb-4 text-center">Generate SOP</h1>
          <p className="text-sm text-center text-gray-500 mb-6">Enter the details below to generate a custom SOP or use a predefined example.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* API Key Inputs */}
            <div className="space-y-4">
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API Key"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter Secret Key"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SOP Prompt Input */}
            <div>
              <select
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Added padding-right to avoid icon squishing
                onChange={(e) => setSelectedExample(e.target.value)}
              >
                <option value="">Select a Predefined SOP</option>
                {examplePrompts.map((prompt, index) => (
                  <option key={index} value={prompt}>
                    {prompt}
                  </option>
                ))}
                <option value="">I do not need a template</option> {/* Option for no template */}
              </select>
            </div>

            <textarea
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Or enter your custom SOP prompt here"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              rows={6}
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-800 text-white w-full px-6 py-3 rounded-md flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="inline-flex space-x-2">
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
                </span>
              ) : (
                <>
                  Generate SOP <BsStars className="ml-2 text-xl animate-pulse" />
                </>
              )}
            </button>

            {/* Use Example Credentials Button */}
            <button
              type="button"
              onClick={handleUseExampleCredentials}
              className="w-full bg-gray-300 text-black px-6 py-3 rounded-md mt-4"
            >
              Use Example Credentials
            </button>

            {/* SOP Explanation Link */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleSopModal}
                className="text-sm text-blue-500 hover:underline"
              >
                What is an SOP?
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">Error: {error}</p>}
        </div>

        <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">
            Generated SOP
            <div className="flex space-x-4">
              <button
                className="bg-gray-800 text-white text-sm px-4 py-2 rounded-md"
                onClick={toggleEdit}
              >
                {isReadOnly ? "Edit SOP" : "View SOP"}
              </button>
              <button
                className="bg-white text-black text-sm px-4 py-2 rounded-md border border-black flex items-center"
                onClick={handleExportDoc}
              >
                <FaDownload className="mr-2" /> Save
              </button>
            </div>
          </h2>

          <div className="bg-gray-100 p-6 rounded-md text-black text-lg h-[80vh] overflow-auto">
            {response ? (
              <div className="space-y-4">
                <div className="mt-4">
                  {isEditing ? (
                    <ReactQuill
                      value={editorContent}
                      onChange={setEditorContent}
                      theme="snow"
                      modules={{
                        toolbar: [
                          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                          ['bold', 'italic', 'underline'],
                          ['link'],
                          ['blockquote', 'code-block'],
                          [{ 'align': [] }],
                          ['clean']
                        ],
                      }}
                    />
                  ) : (
                    <div className="ql-editor" dangerouslySetInnerHTML={{ __html: editorContent }} />
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">No SOP generated yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* SOP Modal */}
      {showSopModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">What is an SOP?</h3>
            <p className="text-sm text-gray-700">
              An SOP (Standard Operating Procedure) is a document that provides detailed instructions and guidelines to ensure that certain processes or tasks are carried out consistently and effectively within an organization.
            </p>
            <button
              onClick={handleSopModal}
              className="mt-4 text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOPTester;
