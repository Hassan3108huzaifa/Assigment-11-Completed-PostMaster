import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Curated Content",
      description: "Handpicked articles and posts from the best sources across the web, ensuring you always have access to high-quality, relevant information.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VyYXRlZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Personalized Feed",
      description: "Our AI-powered algorithm learns your preferences to deliver a tailor-made content stream that evolves with your interests.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWxpemVkfGVufDB8fDB8fHww"
    },
    {
      title: "Seamless Sharing",
      description: "Effortlessly share your favorite posts across all major social media platforms with just a single click, expanding your digital footprint.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hhcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights into your reading habits and content engagement with our comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWxpemVkfGVufDB8fDB8fHww"
    }
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Unleash the Power of PostMaster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

