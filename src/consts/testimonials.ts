export interface Testimonial {
  name: string
  rating: number
  comment: string
  image?: string
  url?: string;
}

export const TESTIMONIOS: readonly Testimonial[] = [
  {
    name: "Jeancarlos Salaazar",
    rating: 5,
    comment: "Realice una compra hace un año con es señor Fabio, y la realidad es que estamos muy complacidos y satisfechos con la adquisición del auto.",
    image: "/testimonio2.webp",
    url: "https://maps.app.goo.gl/7V7izmhf8YkUdoQq6"
  },
  {
    name: "Cesar Juarez",
    rating: 5,
    comment: "La compra de un auto lleva consigo nervios, ansiedad, inseguridad ,temor, alegría... Mí experiencia ha sido por demás satisfactoria. Padre e hijo en cada detalle y con total sinceridad en las dudas planteadas... Recomendable al 100%. Volvería sin lugar a dudas",
    url: "https://maps.app.goo.gl/XrSvdWbBMhD5m2bk9"
  },
  {
    name: "Diego Ariel López",
    rating: 5,
    comment: "Fabio no vende autos, te consigue lo mejor! Tiene una gran experiencia y profesionalidad, te facilita completamente cualquier operación de compraventa de vehículos y te dice todo tal cual es con mucha transparencia y una calidad humana difícil de encontrar. Le compré un Peugeot 208 año 2018 y es el mejor auto, realmente para recomendar y para comprarle con mucha confianza. 💯 Puntos!!! A seguir así!",
    image: "/testimonio1.webp",
    url: "https://maps.app.goo.gl/zf3tmzN4j6snFsy17"
  },
  {
    name: "Carlos Rico",
    rating: 5,
    comment: "Excelente experiencia. Todo se hizo fácil, claro rápido y confiable. No es algo que uno haga todos los días, por eso tenes que confiar en personas profesionales y serias como Fabio. Muchas gracias por todo.",
    url: "https://maps.app.goo.gl/JEAhA5FpSBrg7gdm9"
  },
  {
    name: "Florencia Victoria Pavon",
    rating: 5,
    comment: "Es un excelente profesional! Honesto! Mi experiencia fue superadora. Te simplifica y resuelve todo lo que se ponga en el medio. De gran confianza! Vendí mi Fox en mayo 2023.",
    url: "https://maps.app.goo.gl/QKxxF9epPvjo3oNb6"
  }
  
] as const