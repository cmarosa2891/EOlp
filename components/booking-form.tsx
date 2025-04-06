"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Actualizar el esquema de validación para manejar selecciones de horarios
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  phone: z.string().min(8, {
    message: "Por favor ingresa un número de teléfono válido.",
  }),
  reason: z.string().min(5, {
    message: "Por favor describe brevemente el motivo de consulta (mínimo 10 caracteres).",
  }),
  selectedTimeSlots: z.array(z.string()).min(1, {
    message: "Por favor selecciona al menos un horario.",
  }),
  type: z.enum(["online", "presencial"], {
    required_error: "Por favor selecciona el tipo de consulta.",
  }),
})

// Definir los días y horarios disponibles
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "13:30",
  "14:30",
  "15:30",
  "16:30",
  "17:30",
  "18:30",
  "19:30",
  "20:30",
  "21:30",
]

// Matriz de disponibilidad según las condiciones especificadas
const availabilityMatrix = {
  Lunes: {
    "07:00": true,
    "08:00": true,
    "09:00": true,
    "13:30": false,
    "14:30": false,
    "15:30": false,
    "16:30": false,
    "17:30": false,
    "18:30": false,
    "19:30": true,
    "20:30": true,
    "21:30": true,
  },
  Martes: {
    "07:00": true,
    "08:00": true,
    "09:00": true,
    "13:30": true,
    "14:30": true,
    "15:30": true,
    "16:30": true,
    "17:30": true,
    "18:30": true,
    "19:30": true,
    "20:30": true,
    "21:30": false,
  },
  Miércoles: {
    "07:00": true,
    "08:00": true,
    "09:00": true,
    "13:30": false,
    "14:30": false,
    "15:30": false,
    "16:30": false,
    "17:30": false,
    "18:30": false,
    "19:30": true,
    "20:30": true,
    "21:30": true,
  },
  Jueves: {
    "07:00": true,
    "08:00": true,
    "09:00": true,
    "13:30": false,
    "14:30": false,
    "15:30": false,
    "16:30": false,
    "17:30": false,
    "18:30": false,
    "19:30": false,
    "20:30": false,
    "21:30": false,
  },
  Viernes: {
    "07:00": false,
    "08:00": false,
    "09:00": false,
    "13:30": false,
    "14:30": false,
    "15:30": false,
    "16:30": false,
    "17:30": false,
    "18:30": false,
    "19:30": false,
    "20:30": false,
    "21:30": false,
  },
}

// Función para formatear el horario para mostrar en la tabla
function formatTimeForDisplay(time: string) {
  return time
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      selectedTimeSlots: [],
      type: "online",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Convertir los slots seleccionados a un formato legible
    const selectedSlots = values.selectedTimeSlots.map((slot) => {
      const [day, time] = slot.split("|")
      return `${day} a las ${time}`
    })

    // Prepare message for WhatsApp
    const message = encodeURIComponent(
      `*Nueva Solicitud de Turno - ${values.type === "online" ? "Consulta Online" : "Consulta Presencial"}*\n\n` +
         `Me gustaría solicitar un turno para una consulta. A continuación, detallo la información requerida:\n\n` +
      `     *Nombre completo:* ${values.name}\n` +
      `     *Correo electrónico:* ${values.email}\n` +
      `     *Número de teléfono:* +54 9 ${values.phone}  *\n\n` +
      `     *Motivo de la consulta:* ${values.reason}\n` +
      `     *Horarios de preferencia seleccionados:* ${selectedSlots.map(slot => `  - ${slot}`).join("\n")}\n` +
      `     *Tipo de consulta:* ${values.type === "online" ? "Consulta Online" : "Consulta Presencial"}\n\n` +
      `Agradecería que pudieran informarme sobre la disponibilidad para confirmar el turno y los próximos pasos a seguir.\n\n` +
      `Atentamente,\n\n` +
      `${values.name}`
    );

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Open WhatsApp with the message
      window.open(`https://wa.me/+3489683697?text=${message}`, "_blank")

      toast({
        title: "Solicitud enviada",
        description: "Tu solicitud de turno ha sido enviada. Te contactaremos a la brevedad para confirmar.",
      })

      form.reset()
    }, 1500)
  }

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        {...field}
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@email.com"
                        {...field}
                        className="border-primary/20 focus-visible:ring-primary/30"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tu número de teléfono"
                      {...field}
                      className="border-primary/20 focus-visible:ring-primary/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivo de consulta</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe brevemente el motivo de tu consulta"
                      {...field}
                      className="min-h-[100px] border-primary/20 focus-visible:ring-primary/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de consulta</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary/30">
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="online">Consulta Online</SelectItem>
                      <SelectItem value="presencial" disabled>Consulta Presencial</SelectItem>
                      <p className="text-xs text-muted-foreground">
                        (momentaneamente no disponible)
                      </p>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="selectedTimeSlots"
              render={({ field }) => (
                <FormItem>
                 <FormLabel className="text-base">Días y horarios de atención</FormLabel>
                  <p className="text-sm text-muted-foreground">Desplaza la tabla y selecciona una o varias opciones, para coordinar día y horario de atención de acuerdo a tu conveniencia</p>
                  <FormMessage />
                  <div className="overflow-x-auto mt-2">
                    <Table className="border border-primary/20 rounded-md">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-medium text-center bg-primary/10">Día / Hora</TableHead>
                          {timeSlots.map((time) => (
                            <TableHead key={time} className="font-medium text-center bg-primary/10">
                              {formatTimeForDisplay(time)}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {days.map((day) => (
                          <TableRow key={day}>
                            <TableCell className="font-medium bg-primary/5">{day}</TableCell>
                            {timeSlots.map((time) => (
                              <TableCell key={`${day}-${time}`} className="text-center p-0">
                                {availabilityMatrix[day][time] ? (
                                  <div className="flex items-center justify-center p-2">
                                    <Checkbox
                                      id={`${day}|${time}`}
                                      checked={field.value?.includes(`${day}|${time}`)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, `${day}|${time}`])
                                          : field.onChange(field.value?.filter((value) => value !== `${day}|${time}`))
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div className="p-2 text-muted-foreground">-</div>
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Para coordinar un horario, por favor, indica tu disponibilidad seleccionando más de una opción.</p>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Solicitar Turno"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al solicitar un turno, recibirás una confirmación por WhatsApp con los detalles de tu cita.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

