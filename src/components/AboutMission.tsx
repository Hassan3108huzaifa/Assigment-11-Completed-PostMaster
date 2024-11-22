import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutMission() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-700 border-gray-600">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-semibold text-purple-300">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              At PostMaster, our mission is to empower individuals and organizations with a seamless content discovery and sharing experience. We believe in the power of information to inspire, educate, and connect people across the globe.
            </p>
            <p className="text-gray-300">
              By leveraging cutting-edge AI and machine learning technologies, we aim to create a personalized content ecosystem that evolves with each user&apos;s interests and needs, fostering a community of lifelong learners and thought leaders.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

