"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // This would normally validate against a secure backend
    // For demo purposes, we'll use a simple check
    // API-KEY INTEGRATION POINT: You would need to add your authentication API credentials here

    setTimeout(() => {
      // Simple validation for demo
      if (username === "admin" && password === "password") {
        router.push("/admin/dashboard")
      } else {
        setError("Credenciales inválidas. Por favor intenta nuevamente.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/10 p-4">
      <Card className="w-full max-w-md border-primary/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-primary">Acceso Profesional</CardTitle>
          <CardDescription>Ingresa tus credenciales para acceder al panel de administración</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                placeholder="Tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-primary/20 focus-visible:ring-primary/30"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primary/20 focus-visible:ring-primary/30"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin} className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

