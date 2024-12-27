import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Code, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ApiOverview() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">API Overview</h1>
      <p className="text-gray-300 text-lg mb-8">
        Explore Rue's powerful API capabilities for automating compliance reviews and managing business categorization.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid gap-6">
          <Card className="p-6 bg-[#0f1729] border-gray-800">
            <div className="flex items-start mb-4">
              <Code className="h-6 w-6 mr-3 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
                <p className="text-gray-300">
                  Simple and intuitive REST API with comprehensive documentation and examples.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#0f1729] border-gray-800">
            <div className="flex items-start mb-4">
              <Zap className="h-6 w-6 mr-3 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-300">
                  Get instant results with our high-performance API infrastructure.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#0f1729] border-gray-800">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 mr-3 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-grade security with API key authentication and encryption.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <div className="space-y-4">
          <Link href="/developer-docs/quick-start" className="block">
            <Button variant="outline" className="w-full justify-between group">
              Quick Start Guide
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/developer-docs/authentication" className="block">
            <Button variant="outline" className="w-full justify-between group">
              Authentication
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/developer-docs/api-calls" className="block">
            <Button variant="outline" className="w-full justify-between group">
              Making API Calls
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

