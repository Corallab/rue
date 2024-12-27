import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Shield, Workflow, Users, Clock, BarChartIcon as ChartBar } from 'lucide-react'
import Image from 'next/image'

export default function CaseManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              AI-Powered Case Management Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your compliance workflow with intelligent automation, custom policies, and advanced security features.
            </p>
            <Button size="lg">Schedule a Demo</Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Case Management Dashboard"
              width={1200}
              height={675}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Brain className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI-Generated SOPs</h3>
                <p className="text-gray-600">
                  Automatically generate and maintain Standard Operating Procedures tailored to your compliance requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Workflow className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Custom Policy Automation</h3>
                <p className="text-gray-600">
                  Design and implement custom compliance policies with automated workflows and approval processes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security features including role-based access control and comprehensive audit logs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Enable seamless collaboration between compliance teams with shared workspaces and real-time updates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Automated Timelines</h3>
                <p className="text-gray-600">
                  Track and manage compliance deadlines with automated reminders and timeline management.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <ChartBar className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Gain insights into your compliance operations with comprehensive analytics and reporting tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

