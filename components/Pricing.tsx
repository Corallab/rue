'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import BetaSignupModal from './BetaSignupModal'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses',
    features: ['Up to 1,000 API calls/month', 'Basic email support', '99.9% uptime SLA'],
  },
  {
    name: 'Growth',
    price: '$999',
    description: 'Ideal for growing companies',
    features: ['Up to 5,000 API calls/month', 'Priority email & chat support', '99.99% uptime SLA'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: ['Unlimited API calls', 'Dedicated account manager', 'Custom SLA'],
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
              Choose the plan that fits your compliance review needs
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${plan.name === 'Starter' ? 'relative border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-padding' : ''}`}
              >
                {plan.name === 'Starter' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xs font-bold py-1 px-4 rounded-full">
                    Recommended
                  </div>
                )}
                <div className={`flex-grow ${plan.name === 'Starter' ? 'bg-white m-[3px] rounded-lg' : ''}`}>
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
                    <Button className="w-full" onClick={openBetaModal}>Get Started</Button>
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

