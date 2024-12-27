export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Rue&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
        <h2>2. Use of Services</h2>
        <p>You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:</p>
        <ul>
          <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation</li>
          <li>To impersonate or attempt to impersonate Rue, a Rue employee, another user, or any other person or entity</li>
        </ul>
        <h2>3. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Rue and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}
