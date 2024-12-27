export default function HandlingResponses() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Handling Responses</h1>
      <p className="text-gray-300 text-lg mb-8">
        Learn how to effectively handle and process responses from Rue's API.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Response Structure</h2>
        <p className="text-gray-300 mb-4">
          Rue's API returns responses in JSON format. A typical response structure looks like this:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "category": "Technology",
  "summary": "Example Tech is a software company...",
  "confidence_score": 0.95,
  "social_media_links": [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/company/example-tech"
    }
  ]
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Handling Errors</h2>
        <p className="text-gray-300 mb-4">
          When an error occurs, the API will return a JSON object with an <code className="text-blue-400">error</code> field:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "error": {
    "code": "invalid_input",
    "message": "The provided input_string is not valid."
  }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tips for Processing Responses</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Always check for the presence of an <code className="text-blue-400">error</code> field</li>
          <li>Use the <code className="text-blue-400">confidence_score</code> to gauge the reliability of the categorization</li>
          <li>Handle missing fields gracefully, as not all fields may be present for every request</li>
        </ul>
      </section>
    </div>
  )
}

