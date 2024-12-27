import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const jobDescriptions = {
  "senior-ai-engineer": {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    description: "We're seeking a talented Senior AI Engineer to join our growing team. In this role, you'll have the opportunity to work on cutting-edge AI technologies and help shape the future of compliance.",
    responsibilities: [
      "Design and implement advanced machine learning models",
      "Collaborate with cross-functional teams to integrate AI solutions",
      "Optimize existing AI systems for improved performance and accuracy",
      "Stay up-to-date with the latest developments in AI and machine learning"
    ],
    requirements: [
      "5+ years of experience in AI/ML development",
      "Strong programming skills in Python and experience with deep learning frameworks",
      "PhD or MS in Computer Science, Machine Learning, or related field",
      "Experience with natural language processing and computer vision"
    ]
  },
  "compliance-specialist": {
    title: "Compliance Specialist",
    department: "Legal",
    location: "New York, NY",
    description: "We're looking for a Compliance Specialist to ensure our AI-driven compliance solutions meet all regulatory requirements and industry standards.",
    responsibilities: [
      "Develop and maintain compliance policies and procedures",
      "Conduct regular audits to ensure adherence to compliance standards",
      "Collaborate with the engineering team to implement compliance checks in our AI systems",
      "Stay informed about changes in regulatory requirements and update our processes accordingly"
    ],
    requirements: [
      "3+ years of experience in financial compliance or related field",
      "In-depth knowledge of KYC, AML, and other relevant regulations",
      "Strong analytical and problem-solving skills",
      "Excellent communication and interpersonal skills"
    ]
  },
  "product-manager": {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    description: "We're seeking an experienced Product Manager to lead the development and growth of our AI-powered compliance review platform.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Work closely with engineering, design, and business teams to deliver high-quality products",
      "Gather and analyze user feedback to inform product decisions",
      "Prioritize features and create detailed product specifications"
    ],
    requirements: [
      "5+ years of experience in product management, preferably in B2B SaaS or fintech",
      "Strong understanding of AI/ML technologies and their applications",
      "Excellent analytical and communication skills",
      "Experience with agile development methodologies"
    ]
  }
}

export default function JobDescription({ params }: { params: { job: string } }) {
  const job = jobDescriptions[params.job as keyof typeof jobDescriptions]

  if (!job) {
    return <div>Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>{job.department} | {job.location}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>{job.description}</p>
          <div>
            <h3 className="font-semibold mb-2">Responsibilities:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <Button onClick={() => window.location.href = 'mailto:hi@tryrue.com'}>Apply Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}

