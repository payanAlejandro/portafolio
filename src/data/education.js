export const education = [
  {
    title: "Ingeniería en Desarrollo y Gestión de Software",
    school: "Universidad Tecnológica de San Luis Río Colorado",
    period: "Enero 2023 – Agosto 2024",
  },
  {
    title: "TSU en Tecnologías de la Información, Desarrollo de Software Multiplataforma",
    school: "Universidad Tecnológica de San Luis Río Colorado",
    period: "Septiembre 2020 – Diciembre 2022",
  },
  {
    title: "Bachillerato Tecnológico en Electrónica",
    school: "CBTis #33",
    period: "Septiembre 2017 – Julio 2020",
  },
];

const diploma = (id) =>
  `https://platzi.com/p/alejandro.payan/curso/${id}-course/diploma/detalle/`;

export const courses = [
  {
    group: "Python y backend",
    items: [
      { name: "Curso Básico de Python", url: diploma(1937) },
      { name: "Python: PIP y Entornos Virtuales", url: diploma(4261) },
      { name: "Curso Básico de Django", url: diploma(2694) },
      { name: "Django Intermedio: Testing, Static Files, Django Admin", url: diploma(2728) },
      { name: "FastAPI: Introducción, Operaciones, Validaciones y Autenticación", url: diploma(5354) },
      { name: "Fundamentos de Web Scraping con Python y Xpath", url: diploma(1908) },
    ],
  },
  {
    group: "Fundamentos de ingeniería",
    items: [
      { name: "Fundamentos de Ingeniería de Software", url: diploma(1098) },
      { name: "Programación Orientada a Objetos: POO", url: diploma(1474) },
      { name: "Introducción al Pensamiento Computacional con Python", url: diploma(1764) },
      { name: "Pensamiento Lógico: Algoritmos y Diagramas de Flujo", url: diploma(3221) },
      { name: "Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones", url: diploma(3222) },
    ],
  },
  {
    group: "Herramientas",
    items: [
      { name: "Curso Profesional de Git y GitHub", url: diploma(1557) },
      { name: "Introducción a la Terminal y Línea de Comandos", url: diploma(2292) },
    ],
  },
];
