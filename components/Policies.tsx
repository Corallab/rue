import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Shield, Settings, CheckCircle } from 'lucide-react'  // Replaced Gear with Settings
import Link from 'next/link'

export default function Policies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <Image
              src="/image-4.png"
              alt="Automated Compliance Policies"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Automate Compliance Policies for Seamless Case Workflows
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Boost efficiency by automating case workflows with customizable compliance policies tailored to your business needs.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Settings className="h-6 w-6 mr-3 text-primary flex-shrink-0" />  {/* Updated icon */}
                <div>
                  <h3 className="font-semibold mb-1">Customizable Policy Creation</h3>
                  <p className="text-gray-600">Design and implement compliance policies that automate workflows, approvals, and task assignments with ease.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Automated Case Assignments</h3>
                  <p className="text-gray-600">Automatically assign cases to the right teams and set up approval chains to ensure smooth processes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Secure & Compliant</h3>
                  <p className="text-gray-600">Enforce policies with enhanced security features, including audit trails and role-based access controls.</p>
                </div>
              </div>
            </div>
            <Link href="/case-management">
              <Button>Learn More About Automated Compliance</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
