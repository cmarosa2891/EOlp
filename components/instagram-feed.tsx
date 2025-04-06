"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  url: string
}

interface InstagramFeedProps {
  username: string
}

export default function InstagramFeed({ username }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This would normally fetch from Instagram API
    // For demo purposes, we'll use mock data
    // API-KEY INTEGRATION POINT: You would need to add your Instagram API credentials here

    const mockPosts: InstagramPost[] = [
      {
        id: "1",
        imageUrl: "/placeholder.svg?height=400&width=400",
        caption: "La importancia del autocuidado en tiempos de estrés #bienestaremocional #psicología",
        likes: 45,
        comments: 5,
        url: `https://www.instagram.com/${username}/`,
      },
      {
        id: "2",
        imageUrl: "/placeholder.svg?height=400&width=400",
        caption: "5 técnicas para manejar la ansiedad en el día a día #saludmental #ansiedad",
        likes: 62,
        comments: 8,
        url: `https://www.instagram.com/${username}/`,
      },
      {
        id: "3",
        imageUrl: "/placeholder.svg?height=400&width=400",
        caption: "Cómo establecer límites saludables en tus relaciones #relacionessanas #autoestima",
        likes: 38,
        comments: 4,
        url: `https://www.instagram.com/${username}/`,
      },
    ]

    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [username])

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {loading
        ? Array(3)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="overflow-hidden border-primary/20">
                <CardContent className="p-0">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex items-center gap-4 pt-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
        : posts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md border-primary/20">
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image src={post.imageUrl || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-sm line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-primary" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
    </div>
  )
}

