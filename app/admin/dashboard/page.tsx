"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { toast } from "@/components/ui/use-toast"

interface TimeSlot {
  time: string
  available: boolean
}

export default function AdminDashboard() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [consultationType, setConsultationType] = useState<"online" | "presencial">("online")
  const [isOnlineEnabled, setIsOnlineEnabled] = useState(true)
  const [isPresencialEnabled, setIsPresencialEnabled] = useState(true)
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { time: "09:00", available: true },
    { time: "10:00", available: true },
    { time: "11:00", available: true },
    { time: "15:00", available: true },
    { time: "16:00", available: true },
    { time: "17:00", available: true },
    { time: "18:00", available: true },
  ])

  const handleLogout = () => {
    // This would normally clear authentication tokens
    router.push("/admin")
  }

  const toggleTimeSlot = (time: string) => {
    setTimeSlots((prev) => prev.map((slot) => (slot.time === time ? { ...slot, available: !slot.available } : slot)))
  }

  const saveAvailability = () => {
    // This would normally save to a database
    // API-KEY INTEGRATION POINT: You would need to add your calendar management API credentials here

    toast({
      title: "Disponibilidad guardada",
      description: `Se ha guardado la disponibilidad para ${selectedDate ? format(selectedDate, "PPP", { locale: es }) : "la fecha seleccionada"}.`,
    })
  }

  return (
    <div className="min-h-screen bg-secondary/10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">Panel de Administración</h1>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-primary hover:text-primary/80 hover:bg-primary/10"
          >
            Cerrar Sesión
          </Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Gestión de Disponibilidad</CardTitle>
              <CardDescription>Configura los días y horarios disponibles para consultas</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="calendar">Calendario</TabsTrigger>
                  <TabsTrigger value="settings">Configuración</TabsTrigger>
                </TabsList>

                <TabsContent value="calendar" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Selecciona una fecha</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border border-primary/20"
                        locale={es}
                      />
                    </div>

                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-medium">Horarios Disponibles</h3>
                        <Select
                          value={consultationType}
                          onValueChange={(value: "online" | "presencial") => setConsultationType(value)}
                        >
                          <SelectTrigger className="w-[180px] border-primary/20">
                            <SelectValue placeholder="Tipo de consulta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Consulta Online</SelectItem>
                            <SelectItem value="presencial">Consulta Presencial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <div
                            key={slot.time}
                            className="flex items-center justify-between rounded-lg border border-primary/20 p-3"
                          >
                            <span>{slot.time}</span>
                            <Switch checked={slot.available} onCheckedChange={() => toggleTimeSlot(slot.time)} />
                          </div>
                        ))}
                      </div>

                      <Button onClick={saveAvailability} className="mt-4 w-full bg-primary hover:bg-primary/90">
                        Guardar Disponibilidad
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">Tipos de Consulta</CardTitle>
                      <CardDescription>Habilita o deshabilita los tipos de consulta disponibles</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="online" checked={isOnlineEnabled} onCheckedChange={setIsOnlineEnabled} />
                        <Label htmlFor="online">Consultas Online</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="presencial"
                          checked={isPresencialEnabled}
                          onCheckedChange={setIsPresencialEnabled}
                        />
                        <Label htmlFor="presencial">Consultas Presenciales</Label>
                      </div>

                      <Button
                        onClick={() => {
                          toast({
                            title: "Configuración guardada",
                            description: "Se han guardado los cambios en la configuración.",
                          })
                        }}
                        className="mt-2 w-full bg-primary hover:bg-primary/90"
                      >
                        Guardar Configuración
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

