export default function RateLimiting() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Rate Limiting</h1>
      <p className="text-gray-300 text-lg mb-8">
        Understand Rue's rate limiting policies and how to handle rate limit errors.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
        <p className="text-gray-300 mb-4">
          Rue implements rate limiting to ensure fair usage of the API. The current rate limits are:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>100 requests per minute for standard API keys</li>
          <li>Custom limits for enterprise customers</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Rate Limit Headers</h2>
        <p className="text-gray-300 mb-4">
          Each API response includes headers to help you track your rate limit usage:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1620000000`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Handling Rate Limit Errors</h2>
        <p className="text-gray-300 mb-4">
          If you exceed the rate limit, you'll receive a 429 Too Many Requests response:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please try again later."
  }
}`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mt-4">
          When you receive this error, wait until the time specified in the <code className="text-blue-400">X-RateLimit-Reset</code> header before making more requests.
        </p>
      </section>
    </div>
  )
}

