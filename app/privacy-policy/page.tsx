export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>Rue ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our compliance review services.</p>
        <h2>2. Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
        <ul>
          <li>Contact information (e.g., name, email address, phone number)</li>
          <li>Company information</li>
          <li>Financial information necessary for billing</li>
          <li>Any other information you choose to provide</li>
        </ul>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Comply with legal obligations</li>
        </ul>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

