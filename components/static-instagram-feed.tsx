import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

const INSTAGRAM_POSTS = [
  {
    id: "1",
    embedCode: `
      <a href="https://www.instagram.com/p/DHYWojnRQJA/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="Ver esta publicación en Instagram" style={{ width: '24px', height: '24px' }} />
      </a>
    `,
    caption: "✨ El deseo nos mueve", // Caption original, lo mantuve
    likes: 45,
    comments: 5,
    url: "https://www.instagram.com/p/DHYWojnRQJA/",
    type: "instagram",
  },
  {
    id: "2",
    embedCode: `
      <a href="https://www.instagram.com/p/C2qXxYVuegj/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="Ver esta publicación en Instagram" style={{ width: '24px', height: '24px' }} />
      </a>
    `,
    caption: "💭Pausa consciente y Atención Plena", // Reemplazar con título real
    likes: 2,
    comments: 7,
    url: "https://www.instagram.com/p/C3h0-wFOVas/?utm_source=ig_web_copy_link",
    type: "instagram",
  },
  {
    id: "3",
    embedCode: `
      <a href="https://www.instagram.com/p/C3h0-wFOVas/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="Ver esta publicación en Instagram" style={{ width: '24px', height: '24px' }} />
      </a>
    `,
    caption: "💫¿Triste o Deprimido?", // Reemplazar con título real
    likes: 38,
    comments: 4,
    url: "https://www.instagram.com/p/DIGrlB9RLlf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    type: "instagram",
  },
  {
    id: "4",
    embedCode: `
      <a href="https://www.instagram.com/p/C2qXxYVuegj/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.png" alt="Ver esta publicación en Instagram" style={{ width: '24px', height: '24px' }} />
      </a>
    `,
    caption: "🌟Iniciar una Terapia", // Reemplazar con título real
    likes: 51,
    comments: 7,
    url: "https://www.instagram.com/p/CsoMw_5u-Xw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    type: "instagram",
  },
];

export default function StaticInstagramFeed() {
  return (
    <div className="space-y-4"> {/* Changed to space-y-4 for vertical spacing */}
      {INSTAGRAM_POSTS.map((post) => (
        <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md border-primary/20">
          <Link href={post.url} target="_blank" rel="noopener noreferrer">
            <CardContent className="p-2 flex items-center"> {/* Reduced padding and used flex */}
              {post.type === "instagram" ? (
                <div className="mr-4"> {/* Added margin for spacing */}
                  <div dangerouslySetInnerHTML={{ __html: post.embedCode }} />
                </div>
              ) : (
                <div className="relative aspect-square w-16 h-16 mr-4"> {/* Fixed size for image */}
                  <Image
                    src={"/images/instagram.png"} // Changed to the specified image
                    alt={post.caption.substring(0, 60) + "..."}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-grow"> {/* Allows caption to take remaining space */}
                <p className="text-sm line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
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