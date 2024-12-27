"use client"
"use client"

import { useState } from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { CodeBlock } from '@/components/CodeBlock'
import { Card } from '@/components/ui/card'

const defaultCategories = [
  "Finance", "Technology", "Healthcare", "Education", "Retail", 
  "Manufacturing", "Real Estate", "Entertainment", "Food & Beverage", 
  "Travel & Hospitality", "Automotive", "Energy", "Agriculture", 
  "Telecommunications", "Professional Services", "Non-Profit", 
  "Government", "Media", "Sports & Fitness", "Beauty & Personal Care"
]

const shellExample = `curl --request POST \\
  --url https://api.tryrue.com/api/categorize \\
  --header 'accept: application/json' \\
  --header 'content-type: application/json' \\
  --header 'x-api-key: Ed3AOgogcjybeHYEf8' \\
  --data '{
    "input_string": "example.com",
    "fields": ["category", "summary", "social_media_links"],
    "custom_categories": ["Technology", "Finance", "Education"]
  }'`

const nodeExample = `import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.tryrue.com/api/categorize',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': 'Ed3AOgogcjybeHYEf8'
  },
  data: {
    input_string: 'example.com',
    fields: ['category', 'summary', 'social_media_links'],
    custom_categories: ['Technology', 'Finance', 'Education']
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}`

const pythonExample = `import requests

url = "https://api.tryrue.com/api/categorize"

payload = {
    "input_string": "example.com",
    "fields": ["category", "summary", "social_media_links"],
    "custom_categories": ["Technology", "Finance", "Education"]
}

headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "x-api-key": "Ed3AOgogcjybeHYEf8"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`

const rubyExample = `require 'uri'
require 'net/http'
require 'json'

url = URI("https://api.tryrue.com/api/categorize")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["accept"] = 'application/json'
request["content-type"] = 'application/json'
request["x-api-key"] = 'Ed3AOgogcjybeHYEf8'
request.body = {
  input_string: 'example.com',
  fields: ['category', 'summary', 'social_media_links'],
  custom_categories: ['Technology', 'Finance', 'Education']
}.to_json

response = http.request(request)
puts response.read_body`

const phpExample = `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.tryrue.com/api/categorize",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'input_string' => 'example.com',
    'fields' => ['category', 'summary', 'social_media_links'],
    'custom_categories' => ['Technology', 'Finance', 'Education']
  ]),
  CURLOPT_HTTPHEADER => [
    "accept: application/json",
    "content-type: application/json",
    "x-api-key: Ed3AOgogcjybeHYEf8"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`

export default function DeveloperDocs() {
  const [selectedLanguage, setSelectedLanguage] = useState('Shell')

  const codeExamples: Record<string, string> = {
    'Shell': shellExample,
    'Node': nodeExample,
    'Python': pythonExample,
    'Ruby': rubyExample,
    'PHP': phpExample
  }

  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 h-[calc(100vh-var(--announcement-height,0px))] w-64 bg-[#0f1729] border-r border-gray-800" style={{ top: 'var(--announcement-height, 0px)' }}>
        <Sidebar />
      </div>
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-3xl mx-auto px-8 py-12">
          <section id="introduction" className="mb-16">
            <h1 className="text-4xl font-bold mb-6">Rue API Documentation</h1>
            <p className="text-gray-300 text-lg mb-4">
              The Rue API allows you to categorize businesses based on their domain or email address.
              Our AI-powered system analyzes the business and provides detailed information including
              category classification, contact details, social media presence, and more.
            </p>
          </section>

          <section id="authentication" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Authentication</h2>
            <p className="text-gray-300 mb-4">
              All API requests require authentication using an API key. Include your API key in the
              <code className="mx-2 px-2 py-1 bg-[#0f1729] rounded">X-API-Key</code>
              header with each request.
            </p>
            <Card className="bg-[#0f1729] border-gray-800 p-4 mb-4">
              <p className="text-gray-300 mb-2">Testing API Key:</p>
              <code className="text-blue-400 text-lg">Ed3AOgogcjybeHYEf8</code>
            </Card>
            <p className="text-gray-300">
              For production use, please contact us to obtain a full-access API key.
            </p>
          </section>

          <section id="making-requests" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Making Requests</h2>
            
            <div id="request-parameters" className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Request Parameters</h3>
              <Card className="bg-[#0f1729] border-gray-800 p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">input_string <span className="text-red-400">required</span></h4>
                    <p className="text-gray-300">The domain or email address to analyze (e.g., "example.com" or "contact@example.com")</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">fields <span className="text-gray-400">optional</span></h4>
                    <p className="text-gray-300 mb-2">Array of specific fields to return in the response. Available fields:</p>
                    <ul className="grid grid-cols-2 gap-2 text-gray-300">
                      <li>• type</li>
                      <li>• category</li>
                      <li>• summary</li>
                      <li>• category_confidence_score</li>
                      <li>• phone_numbers</li>
                      <li>• emails</li>
                      <li>• social_media_links</li>
                      <li>• review_links</li>
                      <li>• website_metadata</li>
                      <li>• url</li>
                      <li>• whois_data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">custom_categories <span className="text-gray-400">optional</span></h4>
                    <p className="text-gray-300">Array of custom categories to use for classification instead of default categories</p>
                  </div>
                </div>
              </Card>
            </div>

            <div id="example-request" className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Example Request</h3>
              <div className="mb-6">
                <div className="flex space-x-2 mb-4">
                  {Object.keys(codeExamples).map((language) => (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={`px-4 py-2 rounded ${
                        selectedLanguage === language
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
                <CodeBlock
                  code={codeExamples[selectedLanguage]}
                  language={selectedLanguage.toLowerCase()}
                />
              </div>
            </div>
          </section>

          <section id="response-format" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Response Format</h2>
            <p className="text-gray-300 mb-4">
              The API returns a JSON response containing the requested information about the business.
            </p>
            <CodeBlock
              code={`{
  "category": "Finance",
  "category_confidence_score": 0.9,
  "emails": [
    "support@example.com"
  ],
  "phone_numbers": [
    "+1-123-456-7890"
  ],
  "review_links": [],
  "social_media_links": [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/company/example/"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com/example"
    }
  ],
  "summary": "Example Inc. is a financial technology company offering innovative payment solutions.",
  "type": "domain",
  "url": "https://www.example.com",
  "website_description": "Example Inc. - Revolutionizing financial technology",
  "website_title": "Example Inc. | Innovative FinTech Solutions",
  "whois_data": {
    "creation_date": "2010-01-01 00:00:00",
    "expiration_date": "2025-01-01 00:00:00",
    "last_updated": "2023-01-01 00:00:00",
    "registrar": "Example Registrar, LLC",
    "name_servers": [
      "ns1.example.com",
      "ns2.example.com"
    ]
  }
}`}
              language="json"
            />
          </section>

          <section id="custom-categories" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Custom Categories</h2>
            <p className="text-gray-300 mb-4">
              By default, the API uses our standard set of categories for classification. You can provide
              your own categories using the <code className="px-2 py-1 bg-[#0f1729] rounded">custom_categories</code> parameter.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Default Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {defaultCategories.map((category) => (
                  <div key={category} className="bg-[#0f1729] px-3 py-2 rounded text-gray-300">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="error-handling" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Error Handling</h2>
            <p className="text-gray-300 mb-4">
              The API uses conventional HTTP response codes to indicate the success or failure of requests.
            </p>
            <Card className="bg-[#0f1729] border-gray-800 p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">200 - OK</h4>
                  <p className="text-gray-300">Request succeeded</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">401 - Unauthorized</h4>
                  <p className="text-gray-300">Invalid or missing API key</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">400 - Bad Request</h4>
                  <p className="text-gray-300">Invalid request parameters</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">429 - Too Many Requests</h4>
                  <p className="text-gray-300">Rate limit exceeded</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">500 - Internal Server Error</h4>
                  <p className="text-gray-300">Server error, please try again later</p>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

