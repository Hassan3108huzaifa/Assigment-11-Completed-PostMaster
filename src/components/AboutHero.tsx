import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            About PostMaster
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Revolutionizing the way you discover, consume, and share content in the digital age.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition duration-300 ease-in-out">
            <Link href="/fetch-posts">
              Start Exploring
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

