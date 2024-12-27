import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  { name: "Jane Doe", role: "CEO & Founder", avatar: "/placeholder.svg" },
  { name: "John Smith", role: "CTO", avatar: "/placeholder.svg" },
  { name: "Alice Johnson", role: "Head of Compliance", avatar: "/placeholder.svg" },
]

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Rue</h1>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>At Rue, we're on a mission to revolutionize compliance reviews through the power of AI. We believe that by streamlining the KYB process, we can help businesses grow faster while maintaining the highest standards of regulatory compliance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founded in 2023, Rue was born out of the frustration with slow, manual compliance processes. Our team of fintech and AI experts came together to create a solution that would make compliance reviews faster, more accurate, and more efficient.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

