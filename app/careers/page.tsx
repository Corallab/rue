"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

const jobOpenings = [
  { title: "Senior AI Engineer", department: "Engineering", location: "Remote" },
  { title: "Compliance Specialist", department: "Legal", location: "New York, NY" },
  { title: "Product Manager", department: "Product", location: "San Francisco, CA" },
]

export default function Careers() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Careers at Rue</h1>
      <p className="text-xl mb-12">Join us in revolutionizing the world of compliance through AI. We're always looking for talented individuals to join our team.</p>
      <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
      <div className="grid gap-6">
        {jobOpenings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.department} | {job.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>We're seeking a talented {job.title.toLowerCase()} to join our growing team. In this role, you'll have the opportunity to work on cutting-edge AI technologies and help shape the future of compliance.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => router.push(`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`)}>See Job Description</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Don't see a role that fits?</h3>
        <p className="mb-6">We're always on the lookout for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.</p>
        <Button variant="outline" onClick={() => window.location.href = 'mailto:careers@tryrue.com'}>Send Your Resume</Button>
      </div>
    </div>
  )
}

