import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-6">Ready to Transform Your Content Experience?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users and start exploring a world of curated content tailored just for you. Elevate your knowledge, spark your curiosity, and stay ahead of the curve with PostMaster.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            <Link href="/fetch-posts">
              Get Started Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white font-bold rounded-full transition duration-300 ease-in-out">
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

