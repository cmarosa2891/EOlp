import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

const INSTAGRAM_POSTS = [
  {
    id: "1",
    imageUrl: "/images/post-ansiedad.jpg",
    caption:
      "La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés, pero cuando se vuelve constante puede afectar nuestra calidad de vida. Algunas técnicas que pueden ayudarte: respiración consciente, ejercicio físico regular y establecer rutinas saludables. #SaludMental #Ansiedad #Bienestar",
    likes: 45,
    comments: 5,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
  {
    id: "2",
    imageUrl: "/images/post-autoestima.jpg",
    caption:
      "Trabajar en nuestra autoestima es fundamental para nuestro bienestar emocional. Recuerda que eres suficiente tal como eres, con tus virtudes y aspectos a mejorar. La autocompasión es el primer paso hacia una autoestima saludable. #Autoestima #AmorPropio #Psicología",
    likes: 62,
    comments: 8,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
  {
    id: "3",
    imageUrl: "/images/post-limites.jpg",
    caption:
      "Establecer límites saludables en nuestras relaciones es un acto de amor propio. Aprender a decir 'no' cuando es necesario nos permite cuidar nuestra energía y bienestar emocional. ¿Te cuesta poner límites? Podemos trabajarlo juntos en terapia. #LímitesSaludables #Relaciones #BienestarEmocional",
    likes: 38,
    comments: 4,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
  {
    id: "4",
    imageUrl: "/images/post-duelo.jpg",
    caption:
      "El duelo es un proceso natural que todos experimentamos ante una pérdida significativa. No hay una forma 'correcta' de atravesarlo, cada persona lo vive a su manera y a su tiempo. Si estás pasando por un proceso de duelo, recuerda que es importante permitirte sentir y buscar apoyo. #ProcesosDeDuelo #AcompañamientoTerapéutico",
    likes: 51,
    comments: 7,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
  {
    id: "5",
    imageUrl: "/images/post-estres.jpg",
    caption:
      "El estrés crónico puede afectar tanto nuestra salud mental como física. Algunas señales de alerta: problemas para dormir, irritabilidad constante, dolores de cabeza frecuentes y dificultad para concentrarse. ¿Te sientes identificado/a? Hablemos sobre estrategias para manejarlo. #ManejoDelEstrés #Autocuidado",
    likes: 42,
    comments: 6,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
  {
    id: "6",
    imageUrl: "/images/post-terapia.jpg",
    caption:
      "Iniciar un proceso terapéutico es un acto de valentía y amor propio. La terapia te brinda un espacio seguro para explorar tus emociones, desarrollar herramientas de afrontamiento y trabajar en tu crecimiento personal. ¿Estás pensando en comenzar terapia? Estoy aquí para acompañarte en ese camino. #ProcesoTerapéutico #SaludMental",
    likes: 55,
    comments: 9,
    url: "https://www.instagram.com/psi.evelyn.o/",
  },
]

export default function StaticInstagramFeed() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {INSTAGRAM_POSTS.map((post) => (
        <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md border-primary/20">
          <Link href={post.url} target="_blank" rel="noopener noreferrer">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.caption.substring(0, 60) + "..."}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm line-clamp-3">{post.caption}</p>
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

