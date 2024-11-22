import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import { Stats } from '@/components/Stats'
import { CallToAction } from '@/components/CallToAction'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full bg-gradient-to-r from-purple-900 via-gray-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Discover. Engage. Share.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
              Unleash the power of curated content with PostMaster. Your gateway to a world of knowledge, inspiration, and connection.
            </p>
            <p className="text-lg text-gray-400">
              Join thousands of curious minds exploring trending topics, insightful articles, and thought-provoking discussions.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/fetch-posts">
                  Explore Posts
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white font-bold rounded-full transition duration-300 ease-in-out">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Image
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="PostMaster Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">1M+</p>
              <p className="text-sm">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

