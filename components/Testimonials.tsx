import { Card, CardContent } from '@/components/ui/card'
import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote: "Rue has helped us speed up our compliance reviews by 90%, allowing us to focus on the clients we can approve.",
    author: "Romeo Ju",
    title: "CEO",
    company: "Bancoli"
  },
  {
    quote: "Thanks to Rue&apos;s AI, we scaled our KYB process without hiring a huge team. It&apos;s a real game-changer for our business.",
    author: "Eric Weingarten",
    title: "Chief Legal Officer",
    company: "Bridge.xyz"
  },
  {
    quote: "Rue&apos;s platform has boosted our efficiency and customer satisfaction. It&apos;s the future of compliance reviews.",
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
            See what our customers are saying about Rue&apos;s compliance solution
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-gray-200" />
                <blockquote className="text-lg mb-6 relative z-10">&quot;{testimonial.quote}&quot;</blockquote>
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
