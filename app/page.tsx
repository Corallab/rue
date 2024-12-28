'use client'

import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import BusinessApi from '@/components/BusinessApi'
import CaseManagement from '@/components/CaseManagement'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { useState } from 'react'
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import AINotes from '@/components/AINotes'
import Policies from '@/components/Policies'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [inputString, setInputString] = useState('')
  const [categories, setCategories] = useState('')
  const [highRiskCategories, setHighRiskCategories] = useState('')
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
  })

  const handleFieldChange = (field: string) => {
    setSelectedFields((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResponse(null)

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
      )
      setResponse(res.data)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background w-full">
      <Hero />
      <Benefits />
      <Features />
      <BusinessApi />
      <CaseManagement />
      <AINotes />
      <Policies />
      <Pricing />

      {/* Form and Results Section with Padding and Side by Side Layout */}
      <div className="w-full bg-white p-12 rounded-lg mb-8 mx-auto max-w-5xl">
        <h1 className="text-3xl font-extrabold mb-8 text-black text-center">
          Try Our Web Presence API
        </h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          This is a Web Presence Business API that pulls web forensics on any business email or url and performs Adverse Media Checks across 200,000 news outlets worldwide in real-time.
        </p>

        {/* Developer Docs Link Styled as a Button with Emoji */}
        <div className="text-center mb-8 ">
          <Link
            href="https://developer.tryrue.com"
            className="bg-black text-white text-gray-800 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 inline-block py-2 px-6 border border-gray-300 rounded-md"
          >
            🚀 Start Implementing Now! Check Developer Docs
          </Link>
        </div>

        {/* Flexbox Layout for Form and Results */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <form onSubmit={handleSubmit}>
              {/* API Key Inputs */}
              <div className="space-y-6">
                {/* API Key Input */}
                <div>
                  <label className="block text-black font-medium mb-2">API Key</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter API Key"
                      className="w-full p-3 rounded-md bg-gray-100 text-black border-2 border-gray-300 focus:outline-none focus:border-black shadow-md"
                    />
                    <button
                      onClick={() =>
                        setApiKey('staging_api_key_12345abcde67890xyz') ||
                        setSecretKey('staging_secret_key_abcd1234xyz7890qwe')
                      }
                      className="bg-white text-black px-6 py-3 rounded-md border-2 border-gray-300 w-full"
                    >
                      Use Test Keys
                    </button>
                  </div>
                </div>

                {/* Secret Key Input */}
                <div>
                  <label className="block text-black font-medium mb-2">Secret Key</label>
                  <input
                    type="text"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                    placeholder="Enter Secret Key"
                    className="w-full p-3 rounded-md bg-gray-100 text-black border-2 border-gray-300 focus:outline-none focus:border-black shadow-md"
                  />
                </div>

                {/* Email or URL Input */}
                <div>
                  <label className="block text-black font-medium mb-2">Email or URL</label>
                  <input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                    placeholder="Enter Email or URL"
                    className="w-full p-3 rounded-md bg-gray-100 text-black border-2 border-gray-300 focus:outline-none focus:border-black shadow-md"
                  />
                </div>

                {/* Custom Categories Input */}
                <div>
                  <label className="block text-black font-medium mb-2">Custom Categories</label>
                  <input
                    type="text"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="Custom Categories (comma-separated)"
                    className="w-full p-3 rounded-md bg-gray-100 text-black border-2 border-gray-300 focus:outline-none focus:border-black shadow-md"
                  />
                </div>

                {/* High-Risk Categories Input */}
                <div>
                  <label className="block text-black font-medium mb-2">High-Risk Categories</label>
                  <input
                    type="text"
                    value={highRiskCategories}
                    onChange={(e) => setHighRiskCategories(e.target.value)}
                    placeholder="High-Risk Categories (comma-separated)"
                    className="w-full p-3 rounded-md bg-gray-100 text-black border-2 border-gray-300 focus:outline-none focus:border-black shadow-md"
                  />
                </div>

                {/* Select Fields */}
                <h2 className="text-lg font-bold mb-2 text-black">Select Fields to Return:</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(selectedFields).map((field) => (
                    <div key={field} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedFields[field]}
                        onCheckedChange={() => handleFieldChange(field)}
                        className="text-black"
                      />
                      <label className="text-black">{field}</label>
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-black text-white w-full mt-6 px-6 py-3 rounded-md transition duration-300"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Test API'}
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>

          {/* API Response Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-black">API Response</h2>
            <div className="bg-gray-900 p-6 rounded-md text-sm overflow-auto h-[600px]">
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
  )
}
