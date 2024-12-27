import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Brain, Shield, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Policies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <Image
              src="/image-4.png"
              alt="Case Management Platform"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              AI-Powered Case Management Platform
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your compliance workflow with AI-generated SOPs, custom policies, and advanced security features.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Brain className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">AI-Generated SOPs</h3>
                  <p className="text-gray-600">Automatically generate and update Standard Operating Procedures based on your compliance requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <Workflow className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Custom Policy Automation</h3>
                  <p className="text-gray-600">Create and enforce custom policies with automated workflows and approvals</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Enhanced Security</h3>
                  <p className="text-gray-600">Enterprise-grade security with role-based access control and audit logs</p>
                </div>
              </div>
            </div>
            <Link href="/case-management">
              <Button>Learn More About Case Management</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

