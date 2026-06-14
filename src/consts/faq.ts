export interface FaqItem {
  question: string
  answer: string
}

export const HOME_FAQS: readonly FaqItem[] = [
  {
    question: '¿Qué documentación necesito para retirar un vehículo?',
    answer:
      'Para tu total tranquilidad, todas nuestras unidades se entregan transferidas obligatoriamente. Solo necesitás presentar tu DNI vigente y nosotros nos encargamos de la gestión completa a través de nuestra gestoría oficial.',
  },
  {
    question: '¿Toman autos usados como parte de pago?',
    answer:
      'Sí, tomamos vehículos usados seleccionados y utilitarios en parte de pago (permutas). Podés coordinar una visita a nuestro showroom en Adrogué para realizar una tasación física y justa de tu unidad en el acto.',
  },
  {
    question: '¿Cuáles son las formas de pago aceptadas?',
    answer:
      'Aceptamos operaciones en efectivo (tanto pesos como dólares) y transferencias bancarias directas. También realizamos operaciones combinadas entregando tu usado de menor valor.',
  },
  {
    question: '¿Es obligatorio coordinar una cita previa antes de ir?',
    answer:
      'Recomendamos fuertemente gestionar una cita previa mediante nuestro canal de WhatsApp. De esta forma, nos aseguramos de que Fabio o Juan Pablo estén disponibles en el galpón para darte un asesoramiento personalizado y sin apuros.',
  },
] as const