import { url } from "inspector";
import type { Locale } from "./translations";

interface I_Repository {
  name: string,
  url: string
}

export type Project = {
  slug: string;
  name: string;
  category: string;
  featured: boolean;
  technologies: string[];
  description: Record<Locale, string>;
  context: Record<Locale, string>;
  contribution: Record<Locale, string>;
  challenge: Record<Locale, string>;
  gallery: string[];
  repositories?: I_Repository[];
};

export const projects: Project[] = [
  {
    slug: "ufpsaberpro",
    name: "UFPSaberPro",
    category: "Web Application",
    featured: true,

    technologies: [
      "React",
      "Material-UI",
      "Firebase",
      "Bootstrap",
      "React Bootstrap",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS - EC2"
    ],

    description: {
      es: "Aplicación web para la gestión de convocatorias y simulacros de las Pruebas Saber Pro de la Universidad Francisco de Paula Santander.",
      en: "Web application for the management of calls and simulations of the Saber Pro tests of the Francisco de Paula Santander University.",
    },

    context: {
      es: "El proyecto se construyó como parte de un trabajo universitario debido a la necesidad de incluir un simulador de pruebas de estado para mejorar los resultados en las diferentes facultades de la Universidad. La aplicación debía proveer autenticación para docentes y estudiantes, cada rol tenía que tener acceso a diferentes funcionalidades. El rol de docente era capaz de gestionar bancos de preguntas con sus múltiples respuestas, simulacros y convocatorias para eventuales simulacros, entre otras cosas. Como estudiante, podía visualizar información sobre convocatorias a las cuales ha sido invitado, presentar el simulacro, revisar su historial de puntaje y estadísticas.",
      en: "The project was developed as part of a university assignment due to the need for a standardized test simulator to improve performance across the university's various faculties. The application had to provide authentication for both faculty and students, with each role having access to different functionalities. Faculty members could manage question banks with multiple answer choices, practice tests, and schedule upcoming practice tests, among other things. Students could view information about upcoming tests they had been invited to, take practice tests, and review their score history and statistics.",
    },

    contribution: {
      es: "Mi contribución en el proyecto se encargó de generar el frontend, backend y desplegar el aplicativo en la nube.",
      en: "My contribution to the project involved generating the frontend, backend, and deploying the application in the cloud.",
    },

    challenge: {
      es: "El reto del aplicativo fue poder construir una prueba capaz de ejecutarse en tiempo real, teniendo en cuenta los diferentes escenarios que se pueden llegar a presentar, como abandonar la prueba, cambiar entre pestañas o abrir otras aplicaciones, entre otras cosas similares para hacer trampa.",
      en: "The challenge of the application was to be able to build a test capable of running in real time, taking into account the different scenarios that may arise, such as abandoning the test, switching between tabs or opening other applications, among other similar things to cheat.",
    },

    gallery: [
      "https://drive.google.com/uc?export=view&id=1DkVoyBDlYRNrUENBvipz4VhXu1rn1tkO",
      "https://drive.google.com/uc?export=view&id=1drqFbBD9BuhIiHjuTtF2FqLlweMWiV31",
      "https://drive.google.com/uc?export=view&id=1oTtEImXg7HLMMLcTKAejCGTrRR6niBVS",
      "https://drive.google.com/uc?export=view&id=11kuREo6LU24SVUuCW-tXcbd5MbWuKRP2",
      "https://drive.google.com/uc?export=view&id=1kozzXBeeH9GE3-SRndAQwvcAi4h9m_lv"
    ],

    repositories: [
      { name: "Frontend", url: "https://github.com/YonerSilva/UFPSaberPRO-Frontend" },
      { name: "Backend", url: "https://github.com/YonerSilva/UFPSaberPRO-Backend" }
    ]
  },

  {
    slug: "seed",
    name: "SEED",
    category: "Web Page",
    featured: true,

    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Vercel"
    ],

    description: {
      es: "Semilla promotora del estudio de estructuras de Datos, compuesta por un componente en lenguaje JAVA y un conjunto de simuladores.",
      en: "Seed promoting the study of Data structures, composed of a component in JAVA language and a set of simulators.",
    },

    context: {
      es: "SEED es una herramienta educativa desarrollada en Java para facilitar el aprendizaje de las estructuras de datos mediante la implementación de componentes reutilizables y simuladores interactivos. Su propósito es complementar la formación de los estudiantes de Ingeniería de Sistemas, permitiéndoles comprender de manera visual y práctica el funcionamiento, las operaciones y el comportamiento de diferentes estructuras de datos. El componente proporciona implementaciones documentadas que pueden adaptarse y reutilizarse en el desarrollo de soluciones computacionales de mayor complejidad.",
      en: "SEED is an educational tool developed in Java to facilitate the learning of data structures through reusable components and interactive simulators. Its purpose is to complement the education of Systems Engineering students by enabling them to understand the functionality, operations, and behavior of different data structures through visual and practical demonstrations. The component provides documented implementations that can be adapted and reused to develop more complex computational solutions.",
    },

    contribution: {
      es: "Mi contribución en el proyecto fue realizar las secciones de costo y complejidad algorítmica de las diferentes estructuras de datos del proyecto SEED; la idea era poder mostrar la estructura de la clase en Java con cada uno de sus métodos correspondientes y hacer el análisis y mostrarlo de manera detallada y dinámica para los estudiantes.",
      en: "My contribution to the project was to carry out the cost and algorithmic complexity sections of the different data structures of the SEED project; the idea was to be able to show the structure of the class in Java with each of its corresponding methods and to do the analysis and show it in a detailed and dynamic way for the students.",
    },

    challenge: {
      es: "El reto en el desarrollo de este análisis fue encontrar la forma adecuada de presentar un paso a paso dinámico que permitiera visualizar los costos y el análisis junto con sus fórmulas de cálculo, de manera que los estudiantes pudieran comprenderlo de forma rápida y sencilla.",
      en: "The challenge in developing this analysis was to find the right way to present a dynamic step-by-step process that would allow visualization of the costs and the analysis along with its calculation formulas, so that students could understand it quickly and easily.",
    },

    gallery: [
      "https://drive.google.com/uc?export=view&id=18lrQZAwmpNGAvLtirfx07SJe8rQeLa5h",
      "https://drive.google.com/uc?export=view&id=1ytmHiH-_cgMgzsSrwUnXO4IaY09dnZId",
      "https://drive.google.com/uc?export=view&id=1dnKsb4Aeb4ivWNjLD9ftqlufMLRZAHHN",
      "https://drive.google.com/uc?export=view&id=1Nx7jh7aAuyszLqLjh0QFoSdYi20QdPwu",
    ],

    repositories: [
      { name: "Code", url: "https://github.com/brayanranda/seed_ufps" },
    ]
  },

  {
    slug: "carpen",
    name: "CARPEN",
    category: "Progressive Web Application",
    featured: true,

    technologies: [
      "Python",
      "Django Restframework",
      "React",
      "PostgreSQL",
      "Docker",
      "Firebase",
      "AWS - EC2"
    ],

    description: {
      es: "Aplicación web progresiva para llevar el control de los vehículos de una empresa, mantenimiento, talleres que frecuentan e información de su posicionamiento. Con arquitectura basada en microservicios hecha en Python con Django Restframework y React.",
      en: "Progressive Web Application (PWA) for managing a company's vehicles, including maintenance, frequently visited workshops, and location information. Built with a microservices architecture using Python, Django REST Framework, and React.",
    },

    context: {
      es: "Se quiere realizar un aplicativo web basado en microservicios en un contexto de gestor general de vehículos, que permita un control respecto a la gestión de usuarios que tengan ciertos roles para administrar usuarios, vehículos, talleres, mantenimientos, entre otras cosas. Dicha aplicación, busca ofrecer al usuario un constante seguimiento al vehículo para mantenerlo informado sobre las posibles alertas que se presenten.Además, le presta al usuario la posibilidad de consultar los talleres más cercanos y sus repuestos.",
      en: "The goal is to develop a microservices-based web application for vehicle management, enabling control over user roles for administering users, vehicles, workshops, maintenance, and other functions. This application aims to provide users with continuous vehicle tracking, keeping them informed of any alerts.It also allows users to locate nearby workshops and their spare parts.",
    },

    contribution: {
      es: "Participé en la construcción del aplicativo, desde el desarrollo del frontend con React, los diferentes backends como microservicios, cada uno independiente con su respectiva capa de datos en PostgreSQL. Toda la arquitectura fue desplegada en Docker en una máquina de AWS - EC2.",
      en: "I participated in the application's development, from the frontend using React to the various backends, each an independent microservice with its own PostgreSQL data layer. The entire architecture was deployed on Docker on an AWS EC2 machine.",
    },

    challenge: {
      es: "El reto del aplicativo fue conseguir un dispositivo físico GPS que nos proporcionara la información de posicionamiento del vehículo en tiempo real, y que además nos brindara datos a través de una API consumible para poder hacer el diagnóstico y cálculos respecto al kilometraje, entre otras cosas.",
      en: "The challenge of the application was to obtain a physical GPS device that would provide us with real-time vehicle positioning information, and that would also provide us with data through a consumable API to be able to perform diagnostics and calculations regarding mileage, among other things.",
    },

    gallery: [
      "https://drive.google.com/uc?export=view&id=13EQ1HoRkdAFpbeAcOCmILp32rnqlA4Bn",
      "https://drive.google.com/uc?export=view&id=1Gzc5kwRGZTV8-MTCtKF3PBZhP9blYDFv",
      "https://drive.google.com/uc?export=view&id=1nFFD8u3ovLfy4KjsihbQAc8KvK5ogT4g",
      "https://drive.google.com/uc?export=view&id=1_QRTHcUVBgphPayrElvhP0l28prYz0Zp",
      "https://drive.google.com/uc?export=view&id=1wGjQfF2QptbXwSVnmMef7eLp-z5u-oJ_",
      "https://drive.google.com/uc?export=view&id=19joO6s3tLGX1giO2ZFRzF56QGrdczR8Z",
      "https://drive.google.com/uc?export=view&id=1fNioX9sbnlJOCDyhu3XXcwZssKk8cP1z",
    ],

    repositories: [
      { name: "Frontend", url: "https://github.com/417Farid/Carpen-FrontReact" }
    ]
  },

  {
    slug: "gestion-obras-insumos",
    name: "Gestión de Obras e Insumos",
    category: "Web Application",
    featured: true,

    technologies: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "PostgreSQL",
      "Heroku",
      "Firebase"
    ],

    description: {
      es: "Aplicación web para la gestión de obras e insumos de construcción, con arquitectura MVC hecha en Java con Spring Boot y Thymeleaf.",
      en: "Web application for the management of construction works and supplies, with MVC architecture made in Java with Spring Boot and Thymeleaf.",
    },

    context: {
      es: "Aplicación web orientada a la gestión y el control de obras de construcción e insumos, diseñada para centralizar la información de los proyectos, administrar materiales y recursos, y facilitar el seguimiento de las actividades operativas. La plataforma permite organizar la información, optimizar el control de inventarios y mejorar la planificación y administración de los recursos asociados a cada obra.",
      en: "Web application designed for the management and control of construction projects and supplies. It centralizes project information, manages materials and resources, and facilitates the monitoring of operational activities. The platform helps organize information, optimize inventory control, and improve the planning and management of resources associated with each construction project.",
    },

    contribution: {
      es: "Participé en la construcción de la aplicación, tanto construyendo la lógica como la vista de la misma. También realicé el despliegue en un servidor de Heroku.",
      en: "I participated in the development of the application, building both its logic and its user interface. I also deployed it on a Heroku server.",
    },

    challenge: {
      es: "El reto que tuve con el aplicativo fue su despliegue en Heroku, ya que había un problema de compatibilidad de versiones y de código para poder realizar el cargue del archivo war.",
      en: "The challenge I had with the application was its deployment on Heroku, since there was a version and code compatibility problem to be able to upload the war file.",
    },

    gallery: [
      "https://drive.google.com/uc?export=view&id=1t9kHrL-b2DnXYwqFzSOZUl-eOqWzfW45",
      "https://drive.google.com/uc?export=view&id=1-mYFlpl2u-IgzR-7HxoZr4sHWwZWWvqX",
      "https://drive.google.com/uc?export=view&id=1CVzIReVeh9uEqD1Ig_DMemJgu1JuzK5p",
    ],

    repositories: [
      { name: "Frontend & Backend", url: "https://github.com/YonerSilva/GestionObras"}
    ]
  },
];