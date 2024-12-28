'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import BetaSignupModal from './BetaSignupModal'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Free',
    price: 'Free',
    description: 'Perfect for small projects or testing',
    features: ['Up to 100 API calls/month', 'Basic support', 'Limited uptime SLA'],
  },
  {
    name: 'Growth',
    price: 'Starting at $999',
    description: 'Ideal for growing companies',
    features: [
      'Up to 5,000 API calls or cases/month or $0.10 per call/case after 5,000',
      'Access to Case Management Platform',
      'Priority email & chat support',
      '99.99% uptime SLA',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: ['Custom API call and case pricing', 'Dedicated account manager', 'Custom SLA'],
  },
]

export default function Pricing() {
  const [showBetaModal, setShowBetaModal] = useState(false)

  const openBetaModal = () => {
    setShowBetaModal(true)
  }

  return (
    <>
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your compliance review needs. We offer flexible plans for all kinds of businesses.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.name === 'Growth' ? 'relative border-4 border-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-padding' : ''}`}
              >
                {plan.name === 'Growth' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-xs font-bold py-1 px-4 rounded-full">
                    Recommended
                  </div>
                )}
                <div className={`flex-grow ${plan.name === 'Growth' ? 'bg-white m-[3px] rounded-lg' : ''}`}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-bold">{plan.price}</p>
                    <p className="text-sm text-gray-500 mb-6">per month</p>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://calendly.com/dpicciolini/rue-1">
                        <Button className="w-full">Contact Sales</Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Need a custom plan? <a href="#" className="text-primary hover:underline">Contact us</a> for enterprise pricing.
            </p>
          </div>
        </div>
      </section>
      <BetaSignupModal open={showBetaModal} onOpenChange={setShowBetaModal} />
    </>
  )
}
