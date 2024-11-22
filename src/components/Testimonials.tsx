import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote: "PostMaster has revolutionized how I consume content. It's my go-to app for staying informed and discovering new perspectives!",
      author: "Sarah J., Tech Enthusiast"
    },
    {
      quote: "The personalized feed is spot-on. I discover new, relevant content every day that helps me stay ahead in my field.",
      author: "Mark T., Digital Marketer"
    },
    {
      quote: "As a researcher, PostMaster has become an indispensable tool. It curates content from reputable sources, saving me countless hours.",
      author: "Dr. Emily L., Academic Researcher"
    }
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-purple-300">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600 hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-gray-300 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="text-purple-400 font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

