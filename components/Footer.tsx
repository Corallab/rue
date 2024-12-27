import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rue</h3>
            <p className="text-sm text-gray-500">
              AI-Accelerated Compliance Reviews for modern businesses.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900">Features</Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">Pricing</Link>
              </li>
              <li>
                <Link href="#try-api" className="text-sm text-gray-500 hover:text-gray-900">API</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
              </li>
              <li>
                <Link href="/api/status" className="text-sm text-gray-500 hover:text-gray-900">API Status</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
