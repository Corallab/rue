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
              AI-Generated SOPs for Streamlined Operations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Centralize your Standard Operating Procedures (SOPs) in one place, enabling employees to easily search, edit, and generate SOPs faster with AI assistance.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Shield className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Centralized SOP Management</h3>
                  <p className="text-gray-600">Store and access all your SOPs in one secure, centralized platform, accessible from anywhere.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered SOP Generation</h3>
                  <p className="text-gray-600">Generate and update SOPs faster with AI-driven templates and content suggestions tailored to your needs.</p>
                </div>
              </li>
            </ul>
            <Link href="/sop">
              <Button className="group">
                Create a free SOP now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/image-3.png"
              alt="AI-Generated SOPs Interface"
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
