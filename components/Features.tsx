import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Zap, BarChart3, RefreshCcw } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Put case management on autopilot",
    description: "Automate the time consuming process of manually reviewing customers as they onboard.",
    benefits: [
      "Decisions on a manual review in minutes not days",
      "Detailed and comprehensive audit logs",
      "Real-time status updates and alerts"
    ]
  },
  {
    icon: CheckCircle,
    title: "Configure without code",
    description: "Easily customize and configure compliance checks to match your risk policies and thresholds.",
    benefits: [
      "15+ out-of-the-box KYB & KYC checks",
      "Customizable policy configurations",
      "Flexible workflow creation"
    ]
  },
  {
    icon: BarChart3,
    title: "Make smarter decisions",
    description: "Get real-time analytics on compliance outcomes across your portfolio for better business decisions.",
    benefits: [
      "Comprehensive dashboard analytics",
      "Custom report generation",
      "Risk trend identification"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Automated remediation",
    description: "Resolve cases faster, say goodbye to manual workflows, and minimize risk with automated remediation.",
    benefits: [
      "Personalized customer communications",
      "Multi-channel notification system",
      "Streamlined issue resolution"
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Crush your compliance queue with AI
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Empower your business with faster, smarter, and more reliable compliance reviews that are completed in minutes.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative overflow-hidden border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          )}
        </div>
      </div>
    </section>
  )
}

