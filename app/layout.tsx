import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evelyn Oszurkiewicz | Lic. en Psicología",
  description:
    "Licenciada en Psicología especializada en terapia cognitivo-conductual. Consultas online y presenciales.",
    generator: 'v0.dev',
        verification: {
    google: "UFrqCgg_Q-9z_tz4xDFKpNSQO2HqGJCzFele5jgBjOw",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        <script async src="//www.instagram.com/embed.js"></script>
      </body>
    </html>
  )
}



import './globals.css'
