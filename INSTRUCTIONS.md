# Instrucciones de Implementación

Este documento contiene las instrucciones detalladas para implementar completamente la landing page de Evelyn Oszurkiewicz, incluyendo la personalización necesaria en el código y las opciones de publicación.

## 1. Imágenes y Contenido

### Reemplazar Imágenes

Para personalizar completamente el sitio, necesitas reemplazar las imágenes de ejemplo con imágenes reales:

1. **Foto de Perfil**:
   - Archivo: `public/images/profile-evelyn.jpg`
   - Reemplazar con una foto profesional de Evelyn Oszurkiewicz
   - Tamaño recomendado: 400x400px, formato cuadrado

2. **Imágenes de Publicaciones**:
   - Archivos: 
     - `public/images/post-ansiedad.jpg`
     - `public/images/post-autoestima.jpg`
     - `public/images/post-limites.jpg`
     - `public/images/post-duelo.jpg`
     - `public/images/post-estres.jpg`
     - `public/images/post-terapia.jpg`
   - Reemplazar con imágenes relacionadas con cada tema
   - Tamaño recomendado: 600x600px, formato cuadrado

### Personalizar Contenido

Para personalizar el contenido de las publicaciones:

1. **Editar Publicaciones**:
   - Archivo: `components/static-instagram-feed.tsx`
   - Líneas: 5-42 (array `INSTAGRAM_POSTS`)
   - Personalizar los textos de las publicaciones según el contenido real de Instagram

## 2. Información Personal a Reemplazar

Debes reemplazar la siguiente información con los datos reales de Evelyn Oszurkiewicz:

1. **Información de WhatsApp**:
   - Archivo: `app/page.tsx`
   - Líneas: 25, 62, 344 (busca "yourphonenumber")
   - Reemplazar con: el número de teléfono completo con código de país (ej: `+5491123456789`)

2. **Foto de Perfil**:
   - Archivo: `app/page.tsx`
   - Línea: 74
   - Ya configurado para usar `/images/profile-evelyn.jpg`

3. **Biografía y Detalles Profesionales**:
   - Archivo: `app/page.tsx`
   - Líneas: 97-106
   - Personalizar con la biografía real de Evelyn

4. **Temas de Consulta**:
   - Archivo: `app/page.tsx`
   - Líneas: 118-125
   - Ajustar según los temas de consulta reales que ofrece Evelyn

## 3. Opciones de Publicación

### Opciones Gratuitas

1. **Vercel (Recomendado para proyectos de Next.js)**:
   - Crea una cuenta en [Vercel](https://vercel.com)
   - Conecta tu repositorio de GitHub, GitLab o Bitbucket
   - Importa el proyecto
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Implementa con un solo clic
   - **Limitaciones**: La capa gratuita tiene restricciones de ancho de banda y recursos

2. **Netlify**:
   - Crea una cuenta en [Netlify](https://netlify.com)
   - Arrastra y suelta la carpeta `out` después de ejecutar `npm run build && npm run export`
   - O conecta un repositorio de GitHub
   - **Nota**: Necesitarás ajustar la configuración para Next.js (archivo `next.config.js`)
   - **Limitaciones**: Similar a Vercel, con restricciones en el plan gratuito

3. **GitHub Pages**:
   - Configura GitHub Actions para construir y desplegar
   - Necesitarás un flujo de trabajo personalizado para Next.js
   - **Limitaciones**: Más complejo de configurar, especialmente para aplicaciones dinámicas

### Opciones de Pago

1. **Hospedaje VPS**:
   - Proveedores como DigitalOcean, Linode, AWS Lightsail
   - Costo aproximado: $5-10 USD/mes
   - **Ventajas**: Control total, personalización, sin limitaciones de recursos
   - **Desventajas**: Requiere configuración manual y conocimientos técnicos

2. **Planes Premium de Vercel/Netlify**:
   - Vercel Pro: $20 USD/mes
   - Netlify Pro: $19 USD/mes
   - **Ventajas**: Soporte prioritario, más recursos, análisis avanzados
   - **Desventajas**: Costo más elevado para un sitio simple

3. **Hosting Compartido**:
   - Proveedores como Hostinger, SiteGround, DreamHost
   - Costo aproximado: $3-7 USD/mes
   - **Ventajas**: Económico, fácil de configurar
   - **Desventajas**: Menor rendimiento, posibles limitaciones con aplicaciones Node.js

### Dominio Personalizado

Independientemente de la opción de hosting, considera comprar un dominio personalizado:
- Proveedores: Namecheap, Google Domains, GoDaddy
- Costo aproximado: $10-15 USD/año
- Sugerencias: `evelyno.com.ar`, `psicologaevelyno.com.ar`, `evelynpsicologia.com`

### Recomendación Final

Para un balance entre facilidad de uso, costo y rendimiento:
1. **Hosting**: Vercel (plan gratuito para comenzar)
2. **Dominio**: Comprar un dominio personalizado (~$12 USD/año)
3. **Actualización**: Considerar actualizar a un plan de pago si el tráfico aumenta significativamente

## 4. Seguridad y Protección de Datos

Para el panel de administración:
- Archivo: `app/admin/page.tsx`
- Línea: 23
- Reemplazar la validación simple con un sistema de autenticación seguro (Auth.js / NextAuth)

Para proteger los datos de los pacientes:
- Implementa HTTPS en tu sitio (incluido por defecto en Vercel/Netlify)
- Considera el cifrado de datos sensibles
- Cumple con las regulaciones de protección de datos aplicables en Argentina

## 5. Mantenimiento

1. **Actualizaciones periódicas**:
   - Actualiza las dependencias regularmente
   - Ejecuta `npm outdated` y `npm update` cada 2-3 meses

2. **Copias de seguridad**:
   - Mantén copias de seguridad del código y la base de datos (si la hay)

## Soporte

Si necesitas ayuda adicional con la implementación, considera:
- Contratar a un desarrollador para la configuración inicial
- Usar servicios de soporte como Upwork o Fiverr para tareas específicas
- Buscar comunidades en línea como Stack Overflow para preguntas técnicas

