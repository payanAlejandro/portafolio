// Vite resuelve las imágenes de /assets en desarrollo y también en el build.
const images = import.meta.glob("/assets/{hero,history,projects}/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  as: "url",
});

export const getImageUrl = (path) => images[`/assets/${path}`];
