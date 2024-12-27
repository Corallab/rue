import { Shield, Zap, BarChart3 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    title: "AI-Powered Due Diligence",
    description: "Leverage advanced AI tools to automate thorough background checks, risk assessments, and AML screening, ensuring faster and more accurate compliance reviews.",
    icon: Shield
  },
  {
    title: "Automated Policy Enforcement",
    description: "Stay ahead of changing regulations with real-time automated compliance monitoring, policy enforcement, and seamless updates across your entire workflow.",
    icon: Zap
  },
  {
    title: "Data-Driven Insights",
    description: "Unlock actionable insights with our powerful analytics platform, providing you with real-time reporting, customizable dashboards, and advanced trend analysis to optimize your compliance processes.",
    icon: BarChart3
  }
]

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            AI-Powered Compliance Automation
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Accelerate compliance reviews, reduce manual effort, and optimize decision-making with our AI-driven tools, designed for speed and accuracy in regulatory compliance.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="relative overflow-hidden border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </CardContent>
              </Card>
            )}
          )}
        </div>
      </div>
    </section>
  )
}
