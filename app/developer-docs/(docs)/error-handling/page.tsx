export default function ErrorHandling() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Error Handling</h1>
      <p className="text-gray-300 text-lg mb-8">
        Learn how to handle errors returned by Rue's API effectively.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Error Response Format</h2>
        <p className="text-gray-300 mb-4">
          When an error occurs, Rue's API returns a JSON object with an <code className="text-blue-400">error</code> field:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "error": {
    "code": "error_code",
    "message": "A human-readable error message."
  }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Error Codes</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <code className="text-blue-400">invalid_input</code>: The provided input is invalid or missing required fields.
          </li>
          <li>
            <code className="text-blue-400">authentication_error</code>: Invalid or missing API key.
          </li>
          <li>
            <code className="text-blue-400">rate_limit_exceeded</code>: You've exceeded the allowed number of requests per minute.
          </li>
          <li>
            <code className="text-blue-400">internal_error</code>: An unexpected error occurred on our servers.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices for Error Handling</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Always check for the presence of an <code className="text-blue-400">error</code> field in the response</li>
          <li>Log errors for debugging purposes</li>
          <li>Implement appropriate retry logic for transient errors</li>
          <li>Display user-friendly error messages in your application</li>
        </ul>
      </section>
    </div>
  )
}

