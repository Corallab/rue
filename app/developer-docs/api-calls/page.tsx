export default function MakingApiCalls() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Making API Calls</h1>
      <p className="text-gray-300 text-lg mb-8">
        Learn how to make API calls to Rue's endpoints with different programming languages and frameworks.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Base URL</h2>
        <p className="text-gray-300 mb-4">
          All API requests should be made to:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <code className="text-blue-400">https://api.tryrue.com/api</code>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">/categorize Endpoint</h2>
        <p className="text-gray-300 mb-4">
          The `/categorize` endpoint is used to categorize businesses based on their domain or email address.
        </p>
        <h3 className="text-xl font-semibold mb-2">Request Format</h3>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`POST /api/categorize
Content-Type: application/json
x-api-key: YOUR_API_KEY

{
  "input_string": "example.com",
  "fields": ["category", "summary", "social_media_links"],
  "custom_categories": ["Technology", "Finance", "Education"]
}`}</code>
          </pre>
        </div>
        <h3 className="text-xl font-semibold mb-2">Parameters</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li><code className="text-blue-400">input_string</code> (required): The domain or email address to categorize</li>
          <li><code className="text-blue-400">fields</code> (optional): An array of fields to include in the response</li>
          <li><code className="text-blue-400">custom_categories</code> (optional): An array of custom categories to use for classification</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Response Format</h3>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "category": "Technology",
  "summary": "Example Tech is a software company specializing in AI solutions.",
  "social_media_links": [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/company/example-tech"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com/exampletech"
    }
  ]
}`}</code>
          </pre>
        </div>
      </section>

      {/* Previous content for different languages remains here */}
    </div>
  )
}

