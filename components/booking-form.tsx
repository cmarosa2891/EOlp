"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { addDays, format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

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
  reason: z.string().min(10, {
    message: "Por favor describe brevemente el motivo de consulta (mínimo 10 caracteres).",
  }),
  date: z.date({
    required_error: "Por favor selecciona una fecha.",
  }),
  time: z.string({
    required_error: "Por favor selecciona un horario.",
  }),
  type: z.enum(["online", "presencial"], {
    required_error: "Por favor selecciona el tipo de consulta.",
  }),
})

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      type: "online",
    },
  })

  const availableTimes = ["09:00", "10:00", "11:00", "15:00", "16:00", "17:00", "18:00"]

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Prepare message for WhatsApp/Telegram
    const message = encodeURIComponent(
      `*Nueva solicitud de turno*\n\n` +
        `*Nombre:* ${values.name}\n` +
        `*Email:* ${values.email}\n` +
        `*Teléfono:* ${values.phone}\n` +
        `*Motivo:* ${values.reason}\n` +
        `*Fecha:* ${format(values.date, "PPP", { locale: es })}\n` +
        `*Hora:* ${values.time}\n` +
        `*Tipo:* ${values.type === "online" ? "Consulta Online" : "Consulta Presencial"}`,
    )

    // Here you would typically use an API to send the WhatsApp/Telegram message
    // For this example, we'll just open WhatsApp with the message
    // In a production environment, you would use the WhatsApp Business API or Telegram Bot API
    // API-KEY INTEGRATION POINT: You would need to add your WhatsApp Business API or Telegram Bot API credentials here

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Open WhatsApp with the message
      window.open(`https://wa.me/+yourphonenumber?text=${message}`, "_blank")

      // Enviar mensaje por WhatsApp

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
                      <SelectItem value="presencial">Consulta Presencial</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fecha</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-10 pl-3 text-left font-normal border-primary/20 focus-visible:ring-primary/30",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>Selecciona una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < addDays(new Date(), 1) || date.getDay() === 0 || date.getDay() === 6
                          }
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horario</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 border-primary/20 focus-visible:ring-primary/30">
                          <SelectValue placeholder="Selecciona un horario" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

