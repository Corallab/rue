import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function BusinessApi() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Robust Business API for Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Harness the power of our flexible APIs to integrate custom categories, automate your workflows, and access all critical business information in one centralized place.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Shield className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Custom Categories</h3>
                  <p className="text-gray-600">Create and manage custom business categories tailored to your unique compliance needs</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Real-time Processing</h3>
                  <p className="text-gray-600">Benefit from high-performance API infrastructure that provides fast, real-time results</p>
                </div>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Access to All Data</h3>
                  <p className="text-gray-600">Get comprehensive and centralized access to all essential business data through a single API</p>
                </div>
              </li>
            </ul>
            <Link href="/developer-docs/api-overview">
              <Button className="group">
                Explore API Documentation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/image-6.png"
              alt="Business API Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
