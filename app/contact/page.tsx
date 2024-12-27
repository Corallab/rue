import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can reach us through the following channels:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>support@rue.ai</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 AI Street, San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

