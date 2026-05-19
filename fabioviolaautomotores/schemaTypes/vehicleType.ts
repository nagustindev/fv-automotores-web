import { defineField, defineType } from 'sanity'

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Nuevos Ingresos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Marca y Modelo del Vehículo',
      type: 'string',
      description: 'Ej: TOYOTA HILUX SRX 4X4',
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'number',
    }),
     defineField({
      name: 'mileage',
      title: 'Kilometraje',
      type: 'string',
    }),
    defineField({
      name: 'marketplaceUrl',
      title: 'Link de Facebook Marketplace / MercadoLibre',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto de Portada (Grilla Principal)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'badges',
      title: 'Badges Técnicos',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Agregá los tags clave. Ej: "1.800km", "V6 Diesel", "Caja AT"',
    }),
    defineField({
      name: 'gallery',
      title: 'Fotos Secundarias (Para la Galería de Imágenes)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
})