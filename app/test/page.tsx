'use client';

import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import BusinessApi from '@/components/BusinessApi';
import CaseManagement from '@/components/CaseManagement';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AINotes from '@/components/AINotes';

export default function Home() {
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [inputString, setInputString] = useState('');
  const [categories, setCategories] = useState('');
  const [highRiskCategories, setHighRiskCategories] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [selectedFields, setSelectedFields] = useState({
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

  const handleFieldChange = (field: string) => {
    setSelectedFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await axios.post(
        'http://localhost:5003/api/scrape_metadata',
        {
          input_string: inputString,
          custom_categories: categories.split(',').map((cat) => cat.trim()),
          custom_high_risk_categories: highRiskCategories
            .split(',')
            .map((cat) => cat.trim()),
          include_whois: selectedFields.whois_data,
          include_adverse_media: selectedFields.adverseMedia,
          selected_fields: selectedFields,
        },
        {
          headers: {
            'X-API-Key': apiKey,
            'X-Secret-Key': secretKey,
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background w-full">
      <Hero />
      <Benefits />
      <Features />
      <BusinessApi />
      <CaseManagement />
      <BusinessApi />
      <BusinessApi />
      <BusinessApi />
      <AINotes />
      <Pricing />

      {/* Form and Results Section with Padding and Side by Side Layout */}
      <div className="w-full bg-gray-800 p-6 rounded-md shadow-md mb-8 mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Try Our Web Presence API</h1>
        <button
          onClick={() =>
            setApiKey('staging_api_key_12345abcde67890xyz') ||
            setSecretKey('staging_secret_key_abcd1234xyz7890qwe')
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Use Example Credentials
        </button>

        {/* Flexbox Layout for Form and Results */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* API Key Inputs */}
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API Key"
                className="w-full p-3 rounded-md bg-gray-700 text-white mb-4"
              />
              <input
                type="text"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter Secret Key"
                className="w-full p-3 rounded-md bg-gray-700 text-white mb-4"
              />
              <input
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                placeholder="Enter Email or URL"
                className="w-full p-3 rounded-md bg-gray-700 text-white mb-4"
              />
              <input
                type="text"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                placeholder="Custom Categories (comma-separated)"
                className="w-full p-3 rounded-md bg-gray-700 text-white mb-4"
              />
              <input
                type="text"
                value={highRiskCategories}
                onChange={(e) => setHighRiskCategories(e.target.value)}
                placeholder="High-Risk Categories (comma-separated)"
                className="w-full p-3 rounded-md bg-gray-700 text-white mb-4"
              />
              <h2 className="text-lg font-bold mb-2 text-white">Select Fields to Return:</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(selectedFields).map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedFields[field]}
                      onChange={() => handleFieldChange(field)}
                      className="text-blue-600"
                    />
                    <label className="text-white">{field}</label>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white w-full mt-6 px-4 py-2 rounded-md"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Test API'}
              </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>

          {/* API Response Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-white">API Response</h2>
            <div className="bg-gray-900 p-4 rounded-md text-sm overflow-auto h-[500px]">
              {response ? (
                <SyntaxHighlighter language="json" style={okaidia} wrapLines>
                  {JSON.stringify(response, null, 2)}
                </SyntaxHighlighter>
              ) : (
                <p className="text-gray-500">// Response will appear here</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </main>
  );
}
