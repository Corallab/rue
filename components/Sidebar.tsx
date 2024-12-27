"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = {
  'GETTING STARTED': [
    { name: 'Quick Start Guide', href: '/developer-docs/quick-start' },
    { name: 'Authentication', href: '/developer-docs/authentication' },
    { name: 'API Overview', href: '/developer-docs/api-overview' },
  ],
  'CORE CONCEPTS': [
    { name: 'Understanding Categories', href: '/developer-docs/categories' },
    { name: 'Business Data Extraction', href: '/developer-docs/data-extraction' },
  ],
  'HOW-TO GUIDES': [
    { name: 'Making API Calls', href: '/developer-docs/api-calls' },
    { name: 'Using Custom Categories', href: '/developer-docs/custom-categories' },
    { name: 'Handling Responses', href: '/developer-docs/responses' },
  ],
  'ADVANCED FEATURES': [
    { name: 'Rate Limiting', href: '/developer-docs/rate-limiting' },
    { name: 'Error Handling', href: '/developer-docs/error-handling' },
  ],
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 h-screen overflow-y-auto bg-[#0f1729] p-6 border-r border-gray-800">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-white">
          rue
        </Link>
      </div>
      {Object.entries(navigation).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm block py-1 ${
                    pathname === item.href
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

