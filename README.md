# Portafolio · Alejandro Payan

Sitio personal hecho con **React + Vite**. Una sola página en español, de una columna,
con modo claro/oscuro y diseño responsivo.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # probar el build localmente
```

## Páginas

| URL | Qué es |
| --- | --- |
| `/` (`index.html`) | Diseño principal: sencillo y editorial. Código en `src/`. |
| `/papel` (`papel.html`) | Easter egg: variante "cuaderno de papel". Código en `papel/`. |

La página principal **no enlaza** a `/papel`: solo se llega escribiendo la URL.
La variante lleva `noindex`, así que los buscadores no la listan.

Las dos usan los mismos datos de `src/data/`. En desarrollo y en `npm run preview`,
`/papel` lo resuelve el plugin `ruta-papel` de `vite.config.js`. En producción (Netlify) lo
resuelve `public/_redirects`, que se copia a `dist/` en cada build. Si ya no quieres la
variante, borra `papel.html`, la carpeta `papel/` y `public/_redirects`, y quita `papel` y
el plugin de `vite.config.js`.

## Dónde editar el contenido

Todo el texto vive en archivos de datos, sin tocar los componentes:

| Qué | Archivo |
| --- | --- |
| Nombre, rol, correo, LinkedIn y GitHub | `src/data/profile.js` |
| Experiencia laboral (puestos, viñetas, tecnologías) | `src/data/experience.json` |
| Habilidades por grupo | `src/data/skills.json` |
| Proyectos | `src/data/projects.json` |
| Educación y certificados de Platzi | `src/data/education.js` |

El texto de presentación está en `src/components/Hero.jsx` (y en `papel/Papel.jsx` para la variante).

## Diseño

- Colores y tipografías: variables CSS al inicio de `src/index.css`
  (`:root` para el modo claro y `[data-theme="dark"]` para el oscuro).
- Tipografías (autoalojadas con `@fontsource`): Fraunces, Public Sans e IBM Plex Mono.
  La variante de papel suma Caveat.
- Imágenes: carpeta `assets/` (`hero`, `history`, `projects`), cargadas con `getImageUrl()` de `src/utils.js`.
