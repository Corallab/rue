import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Brain, Shield, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function CaseManagement() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <Image
              src="/image-7.png"
              alt="Case Management Platform"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Simplified Case Management for Faster Compliance Reviews
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our intuitive platform streamlines case management with automated assignments, compliance rules, and thorough KYB/KYC checks to make reviewing cases quick and efficient.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Brain className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Automated Case Assignments</h3>
                  <p className="text-gray-600">Assign cases to the right teams based on predefined rules and ensure smooth case processing with automated workflows.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Workflow className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Thorough KYB/KYC Checks</h3>
                  <p className="text-gray-600">Conduct comprehensive Know Your Business (KYB) and Know Your Customer (KYC) checks to ensure compliance with industry regulations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Sanctions & Watchlist Screening</h3>
                  <p className="text-gray-600">Automate screenings against global sanctions lists and watchlists to ensure no risks are missed in your compliance checks.</p>
                </div>
              </div>
            </div>
            <Link href="https://4ojamhphpgfyx8hw.vercel.app/">
              <Button>Check out our Case Management Demo</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
