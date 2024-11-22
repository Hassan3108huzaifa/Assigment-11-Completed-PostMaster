import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-semibold text-purple-300">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Founded in 2024, PostMaster began as a passion project by a group of content enthusiasts and tech innovators. We recognized the growing challenge of information overload in the digital age and set out to create a solution that would revolutionize how people interact with online content.
            </p>
            <p className="text-gray-300 mb-4">
              What started as a simple content aggregator quickly evolved into a sophisticated platform, powered by advanced algorithms and user-centric design. Today, PostMaster serves millions of users worldwide, from curious individuals to Fortune 500 companies, all seeking to stay informed and ahead in their respective fields.
            </p>
            <p className="text-gray-300">
              Our journey is one of continuous innovation and improvement, driven by our users&apos; feedback and the ever-changing digital landscape. As we look to the future, we remain committed to our core values of accessibility, personalization, and community-driven growth.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

