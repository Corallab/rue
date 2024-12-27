import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AINotes() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Powerful Business API for Custom Categories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Leverage our advanced API to create custom categories and automate your compliance workflow. Perfect for businesses that need tailored solutions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Shield className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Custom Categories</h3>
                  <p className="text-gray-600">Define and manage your own business categories based on your specific needs</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Real-time Processing</h3>
                  <p className="text-gray-600">Get instant results with our high-performance API infrastructure</p>
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
              src="/image-3.png"
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

