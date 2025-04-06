import { Instagram, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BookingForm from "@/components/booking-form"
import StaticInstagramFeed from "@/components/static-instagram-feed"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-primary">Evelyn Oszurkiewicz</h1>
            <span className="text-sm text-muted-foreground">Lic. en Psicología</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://wa.me/+yourphonenumber" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <Send className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/psi.evelyn.o/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Bienestar emocional a tu alcance
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Acompañamiento terapéutico personalizado para ayudarte a encontrar tu equilibrio y bienestar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#booking"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Reservar Turno
                  </Link>
                  <Link
                    href="https://wa.me/+yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Contactar por WhatsApp
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-sm overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/profile-evelyn.jpg"
                  width={400}
                  height={400}
                  alt="Evelyn Oszurkiewicz Psicóloga"
                  className="aspect-square object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Sobre mí</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
              <p className="text-muted-foreground md:text-lg">
                Soy Evelyn Oszurkiewicz, psicóloga especializada en terapia cognitivo-conductual con amplia experiencia
                en el acompañamiento terapéutico. Mi enfoque se centra en crear un espacio seguro donde puedas explorar
                tus emociones y desarrollar herramientas para enfrentar los desafíos de la vida cotidiana.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Creo firmemente en un abordaje personalizado, adaptando las técnicas terapéuticas a las necesidades
                específicas de cada persona. Mi objetivo es acompañarte en tu proceso de autoconocimiento y crecimiento
                personal, brindándote las herramientas necesarias para mejorar tu bienestar emocional.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Topics */}
        <section id="topics" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Temas de Consulta</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { title: "Ansiedad", description: "Manejo de la ansiedad y ataques de pánico" },
                { title: "Depresión", description: "Tratamiento de síntomas depresivos" },
                { title: "Relaciones", description: "Mejora de relaciones interpersonales" },
                { title: "Autoestima", description: "Desarrollo de una autoestima saludable" },
                { title: "Estrés", description: "Técnicas para el manejo del estrés" },
                { title: "Duelo", description: "Acompañamiento en procesos de duelo" },
              ].map((topic, index) => (
                <Card key={index} className="transition-all hover:shadow-md border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary">{topic.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section id="instagram" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Temas de Interés</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
              <p className="text-muted-foreground md:text-lg">
                Explora contenido sobre bienestar emocional y salud mental
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <StaticInstagramFeed />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Reserva de Turnos</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
              <p className="text-muted-foreground md:text-lg">Completa el formulario para solicitar un turno</p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Preguntas Frecuentes</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primary">¿Cómo son las sesiones online?</AccordionTrigger>
                  <AccordionContent>
                    Las sesiones online se realizan a través de videollamada en una plataforma segura. Recibirás un
                    enlace antes de tu cita y solo necesitas una conexión a internet estable y un espacio privado donde
                    te sientas cómodo/a para hablar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primary">¿Cuánto dura cada sesión?</AccordionTrigger>
                  <AccordionContent>Cada sesión tiene una duración aproximada de 50 minutos.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primary">
                    ¿Con qué frecuencia debo asistir a terapia?
                  </AccordionTrigger>
                  <AccordionContent>
                    La frecuencia recomendada inicialmente es de una sesión semanal, pero esto puede variar según tus
                    necesidades específicas y el progreso que vayamos logrando.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primary">
                    ¿Cómo puedo cancelar o reprogramar una cita?
                  </AccordionTrigger>
                  <AccordionContent>
                    Puedes cancelar o reprogramar tu cita con al menos 24 horas de anticipación contactándome
                    directamente por WhatsApp.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primary">¿Trabajas con obras sociales o prepagas?</AccordionTrigger>
                  <AccordionContent>
                    Actualmente trabajo con algunas obras sociales y prepagas. Puedes consultarme directamente para
                    verificar si tu cobertura está incluida.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Contacto</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary/60"></div>
              <p className="text-muted-foreground md:text-lg">¿Tienes alguna pregunta? No dudes en contactarme</p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://wa.me/+yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
                >
                  <Send className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
                <Link
                  href="https://www.instagram.com/psi.evelyn.o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">Email: lic.evelyn.o@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 bg-primary/5">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Evelyn Oszurkiewicz. Todos los derechos reservados.
          </p>
          <Link href="/admin" className="text-xs text-muted-foreground hover:text-primary">
            Acceso Profesional
          </Link>
        </div>
      </footer>
    </div>
  )
}

