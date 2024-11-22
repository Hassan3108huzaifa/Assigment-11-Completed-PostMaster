'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  email: string;
  avatar: string;
  image: string;
}

export default function FetchPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Loading Posts...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-32 w-full bg-gray-700 mb-4" />
                <Skeleton className="h-4 w-full bg-gray-700 mb-2" />
                <Skeleton className="h-4 w-2/3 bg-gray-700" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full bg-gray-700" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Latest Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <CardTitle className="text-xl font-semibold text-purple-300">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 line-clamp-3 mb-4">{post.body}</CardDescription>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-300">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.email}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

