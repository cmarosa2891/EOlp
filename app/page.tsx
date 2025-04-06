"use client"; // This directive tells Next.js to render this component on the client-side

import { Instagram, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BookingForm from "@/components/booking-form"
import StaticInstagramFeed from "@/components/static-instagram-feed"
import { useEffect } from 'react'
import React, { useState } from 'react';

export default function Home() {
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const topicsData = [
    {
      title: "Angustia",
      description: "Si te resulta difícil manejar la preocupación excesiva y experimentas momentos de gran malestar que interrumpen tu día a día, en el espacio terapéutico exploraremos las fuentes de estas emociones desde una perspectiva psicoanalítica, integrando herramientas de la psicología de la tercera ola. Buscaremos formas de encontrar mayor paz interior y bienestar emocional.",
    },
    {
      title: "Depresión",
      description: "Para quienes atraviesan síntomas depresivos, ofrezco un espacio de exploración profunda desde la orientación psicoanalítica, combinando herramientas de la tercera ola de la psicología. Esto nos permitirá comprender y abordar las causas subyacentes y promover la recuperación.",
    },
    {
      title: "Relaciones",
      description: "Si buscas mejorar tus relaciones interpersonales, en terapia exploraremos los patrones que influyen en tus vínculos desde una perspectiva psicoanalítica. A través de estas herramientas, trabajaremos juntos para construir relaciones más saludables y significativas.",
    },
    {
      title: "Desarrollo Personal",
      description: "Para desarrollar una autoestima saludable, te acompaño en un proceso de autoconocimiento profundo desde la orientación psicoanalítica. Exploraremos tu mundo interno con estas herramientas para observar tu pasado y presente con autenticidad, fortaleciendo tu bienestar emocional.",
    },
    {
      title: "Estrés",
      description: "Si el estrés te abruma, en terapia te brindaré herramientas y técnicas de manejo basadas en la orientación psicoanalítica y la psicología de la tercera ola. Juntos exploraremos las causas del estrés y encontraremos caminos hacia una vida más plena y equilibrada.",
    },
  ];

  const handleTitleClick = (description) => {
    setSelectedDescription(description);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedDescription(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-primary">Evelyn Oszurkiewicz</h1>
          <div className=""> {/* Nuevo div para contener la licenciatura */}
            <span className="text-sm text-muted-foreground">Lic. en Psicología</span>
          </div>
        </div>
          <div className="flex items-center gap-4">
            <Link href="https://wa.me/+543489683697" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <div style={{ width: '20px', height: '20px', position: 'relative' }}>
                  <Image src="/images/whatsapp.png" alt="WhatsApp" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/psi.evelyn.o/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <div style={{ width: '20px', height: '20px', position: 'relative' }}>
                  <Image src="/images/instagram.png" alt="Instagram" fill style={{ objectFit: 'contain' }} />
                </div>
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
                    className="inline-flex flex-col items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
                  >
                    <span>Consultar disponibilidad</span>
                    <span style={{ fontSize: '0.8em', color: 'white' }}>
                      (vía WhatsApp)
                    </span>
                  </Link>
                  <Link
                    href="https://wa.me/+543489683697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center justify-center rounded-md border border-primary/30 bg-background px-8 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1"
                  >
                    <span>Contactar por WhatsApp</span>
                    <span style={{ fontSize: '0.8em', color: 'gray' }}>
                      (otras consultas)
                    </span>
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
                <p className="text-muted-foreground md:text-lg" style={{ whiteSpace: 'pre-line' }}>
                ¡Bienvenido/a! Soy Evelyn, psicóloga clínica con más de diez años de experiencia. 
                  {"\n"}Además de mi práctica, soy mamá y disfruto de actividades creativas como la lectura, la pintura y la cerámica. {"\n"}Mi enfoque terapéutico combina la exploración profunda del psicoanálisis con herramientas prácticas de la psicología de la tercera ola, como ACT y mindfulness, para ayudarte a comprender las raíces de tus emociones y pensamientos.{"\n"} En terapia, te ofrezco un espacio seguro para explorar tu mundo interior, identificar patrones y adquirir las herramientas necesarias para observar tu vida con mayor autenticidad. {"\n"}Mi propósito es acompañarte en tu viaje de autodescubrimiento hacia una vida más plena y un bienestar emocional duradero.
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
              {topicsData.map((topic, index) => (
                <Card key={index} className="transition-all hover:shadow-md border-primary/20 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3
                      className="text-xl font-bold text-primary"
                      onClick={() => handleTitleClick(topic.description)}
                    >
                      {topic.title}
                    </h3>
                    {/* La descripción ya no se muestra directamente aquí */}
                  </CardContent>
                </Card>
              ))}
            </div>

{/* Popup */}
{isPopupVisible && selectedDescription && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center"
          onClick={handleClosePopup} // Cerrar el popup al hacer clic fuera
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-8 max-w-md"
            onClick={(e) => e.stopPropagation()} // Evitar que el clic dentro del popup lo cierre
            onTouchEnd={(e) => e.stopPropagation()} // Evitar que el toque dentro del popup lo cierre
          >
            <button
              onClick={handleClosePopup}
              onTouchEnd={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-primary mb-4">
              {topicsData.find(topic => topic.description === selectedDescription)?.title}
            </h3>
            <p className="text-sm text-muted-foreground">{selectedDescription}</p>
          </div>
        </div>
      )}
          </div>
        </section>

        {/* Instagram Feed*/ }
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
              <p className="text-muted-foreground md:text-lg">Completa el formulario para consultar disponibilidad de turnos vía Whatsapp</p>
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
                    Las sesiones online las realizamos a través de videollamada en una plataforma segura. Recibirás un
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
                    Podés cancelar o reprogramar tu cita con al menos 24 horas de anticipación contactándome
                    directamente por WhatsApp.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primary">¿Trabajas con obras sociales o prepagas?</AccordionTrigger>
                  <AccordionContent>
                  Para facilitar tu reintegro con obras sociales y prepagas, emito la factura correspondiente. Te recomiendo consultar con tu prestador para conocer los pasos a seguir.
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
                  href="https://wa.me/+3489683697"
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