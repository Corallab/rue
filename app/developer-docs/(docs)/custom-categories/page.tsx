export default function UsingCustomCategories() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Using Custom Categories</h1>
      <p className="text-gray-300 text-lg mb-8">
        Learn how to use custom categories with Rue's API for more tailored business categorization.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 mb-4">
          While Rue provides a comprehensive set of default categories, you can also use custom categories to better suit your specific needs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Use Custom Categories</h2>
        <p className="text-gray-300 mb-4">
          To use custom categories, include the <code className="text-blue-400">custom_categories</code> parameter in your API request:
        </p>
        <div className="bg-[#0f1729] p-4 rounded-lg mb-4">
          <pre className="text-gray-300">
            <code>{`{
  "input_string": "example.com",
  "custom_categories": ["SaaS", "Enterprise", "SMB", "Fintech"]
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Use clear and distinct category names</li>
          <li>Limit the number of custom categories (recommended: 5-10)</li>
          <li>Consider using a hierarchical structure for more complex categorizations</li>
        </ul>
      </section>
    </div>
  )
}

