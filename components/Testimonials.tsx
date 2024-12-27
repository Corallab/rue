import { Card, CardContent } from '@/components/ui/card'
import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote: "With Rue, we can deny businesses that do not meet our BSA/AML requirements 90% faster, which gives us more time to focus on the customers we approve.",
    author: "Romeo Ju",
    title: "CEO",
    company: "Bancoli"
  },
  {
    quote: "Rue's unique KYB-tailored AI solution enables us to scale our CIP review process without needing to hire a large compliance team.",
    author: "Eric Weingarten",
    title: "Chief Legal Officer",
    company: "Bridge.xyz"
  },
  {
    quote: "We're excited to partner with Rue to unlock the massive improvements that AI brings to the customer experience and our operational efficiency.",
    author: "Michael Tannenbaum",
    title: "COO & CFO",
    company: "Brex"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what our customers are saying about Rue's compliance solution
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-gray-200" />
                <blockquote className="text-lg mb-6 relative z-10">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

