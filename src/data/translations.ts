export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  es: {
    navigation: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      eyebrow: "FULL STACK DEVELOPMENT | BACKEND, FRONTEND & CLOUD COMPUTING",
      titleStart: "Construyo software",
      titleEnd: "para resolver",
      highlight: "problemas reales.",
      description: "Desarrollo soluciones de software escalables, transformando necesidades de negocio en arquitecturas sólidas, integraciones eficientes y aplicaciones mantenibles que generan valor a largo plazo.",
      projectsCta: "Explorar proyectos",
      contactCta: "Contactarme",
      technologies: "TECNOLOGÍAS 🛠️",
    },
    about: {
      label: "01 / SOBRE MÍ 🚀",
      titleStart: "Código con propósito.",
      titleEnd: "Soluciones con criterio.",
      description:
        `Soy Yoner Silva, Ingeniero de Sistemas graduado de la Universidad Francisco de Paula Santander, en Cúcuta, Colombia, con más de 5 años de experiencia en el área de tecnología y desarrollo de software. Mi trayectoria se ha enfocado en el diseño, desarrollo, integración y evolución de soluciones tecnológicas orientadas a resolver necesidades reales y optimizar procesos empresariales.

        He participado en proyectos de distinta naturaleza, abarcando el desarrollo de aplicaciones web, de escritorio y móviles, servicios backend, APIs RESTful, gestión de bases de datos e integración de sistemas. Mi experiencia comprende diferentes estilos arquitectónicos y patrones de diseño, incluidos los enfoques monolíticos, de microservicios y MVC, así como la implementación de mecanismos de autenticación, integración entre componentes y comunicación entre aplicaciones.

        Tengo experiencia en distintas etapas del ciclo de vida del desarrollo de software (SDLC), desde el análisis de requerimientos y el diseño técnico hasta la implementación, las pruebas, la depuración y el mantenimiento de aplicaciones. He participado en la evolución de soluciones empresariales, la construcción de componentes reutilizables, la integración frontend-backend y la conexión de servicios, buscando desarrollar sistemas escalables, mantenibles y alineados con las necesidades del negocio.

        Asimismo, cuento con experiencia en el despliegue de aplicaciones en entornos cloud y en el uso de herramientas de inteligencia artificial generativa como apoyo al desarrollo de software, para tareas como generación y refactorización de código, análisis técnico, depuración y optimización del flujo de trabajo, validando los resultados y manteniendo el criterio técnico sobre las soluciones implementadas.

        Me caracterizo por mi pensamiento analítico, autonomía, capacidad de adaptación y orientación a resultados. Valoro las buenas prácticas de ingeniería de software, la calidad del código, la colaboración interdisciplinaria y la mejora continua como elementos fundamentales para construir soluciones confiables y sostenibles.

        Me interesa seguir aprendiendo y evolucionando como profesional, explorando nuevas tecnologías y mejores formas de desarrollar software. Busco participar en proyectos que representen nuevos retos, me permitan aportar mi experiencia y contribuyan a crear soluciones útiles, eficientes y de valor para las organizaciones.`,
    },
    projects: {
      label: "02 / PROYECTOS 💼",
      title: "Trabajo seleccionado",
      description:
        `Conoce los proyectos en los que he participado, sus objetivos, contexto, tecnologías utilizadas, desafíos técnicos y mi contribución en cada desarrollo.
        
        Por motivos de confidencialidad y políticas internas de algunas organizaciones, ciertos proyectos no pueden divulgarse públicamente ni incluir detalles específicos de su implementación.`,
      buttonViewProject: "Ver proyecto ↗",
      project: {
        buttonBack: "Volver",
        title: "PROYECTO",
        gallery: "Capturas del proyecto",
        image: "captura",
        context: "Contexto del proyecto",
        challenge: "Desafío técnico",
        contribution: "Mi contribución",
        technologies: "Tecnologías utilizadas",
        contact: "¿Hablamos de este proyecto?"
      }
    },
    contact: {
      label: "03 / CONTACTO 📫",
      title: "¿Construimos algo juntos?",
      description:
        "Estoy interesado en nuevos retos profesionales y oportunidades de desarrollo de software.",
    },
    footer: "Diseñado y desarrollado con Next.js",
    languageSwitcher: "Cambiar idioma a inglés",
    themeToggle: {
      light: "Cambiar a tema claro",
      dark: "Cambiar a tema oscuro",
    },
    expandableText: {
      false: "Ver más ↓",
      true: "Ver menos ↑"
    }
  },

  en: {
    navigation: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "FULL STACK DEVELOPMENT | BACKEND, FRONTEND & CLOUD COMPUTING",
      titleStart: "I build software",
      titleEnd: "to solve",
      highlight: "real problems.",
      description: "I develop scalable software solutions, translating business needs into robust architectures, efficient integrations, and maintainable applications that deliver long-term value.",
      projectsCta: "Explore projects",
      contactCta: "Get in touch",
      technologies: "TECHNOLOGIES 🛠️",
    },
    about: {
      label: "01 / ABOUT 🚀",
      titleStart: "Code with purpose.",
      titleEnd: "Solutions with intent.",
      description:
        `I'm Yoner Silva, a Systems Engineer who graduated from Universidad Francisco de Paula Santander in Cúcuta, Colombia, with over five years of experience in technology and software development. My professional background focuses on designing, developing, integrating, and evolving software solutions that address real-world problems and improve business processes.

        I've contributed to a variety of projects involving web, desktop, and mobile applications, backend services, RESTful APIs, database management, and system integration. My experience includes working with different software architecture styles and design patterns, including monolithic architectures, microservices, and MVC, as well as implementing authentication mechanisms, integrating software components, and enabling communication between applications.

        I have experience across multiple stages of the Software Development Life Cycle (SDLC), from requirements analysis and technical design to implementation, testing, debugging, and application maintenance. I've contributed to the continuous improvement of enterprise applications, the development of reusable components, frontend-backend integration, and service connectivity, with a focus on building scalable, maintainable solutions aligned with business needs.

        I also have experience deploying applications in cloud environments and using generative AI tools to support software development tasks such as code generation and refactoring, technical analysis, debugging, and workflow optimization. I validate AI-generated outputs and apply my technical judgment to ensure the quality and suitability of the solutions I implement.

        I consider analytical thinking, autonomy, adaptability, and a results-oriented mindset to be some of my key strengths. I value software engineering best practices, code quality, cross-functional collaboration, and continuous improvement as essential elements in building reliable and sustainable software solutions.

        I'm committed to continuing to grow as a professional by exploring new technologies and better approaches to software development. I'm looking to contribute to projects that present meaningful technical challenges, allow me to put my experience to use, and help deliver practical, efficient solutions that create value for organizations.`,
    },
    projects: {
      label: "02 / PROJECTS 💼",
      title: "Selected work",
      description:
        `Explore the projects I have contributed to, including their objectives, context, technologies, technical challenges, and my role in each development.
        
        Due to confidentiality requirements and internal policies at some organizations, certain projects cannot be publicly disclosed or presented with specific implementation details.`,
      buttonViewProject: "View Project ↗",
      project: {
        buttonBack: "Go back",
        title: "PROJECT",
        gallery: "Project screenshots",
        image: "screenshot",
        context: "Project context",
        challenge: "Technical challenge",
        contribution: "My contribution",
        technologies: "Technologies used",
        contact: "Let's discuss this project"
      }
    },
    contact: {
      label: "03 / CONTACT 📫",
      title: "Let's build something together.",
      description:
        "I'm open to new professional challenges and software development opportunities.",
    },
    footer: "Designed and built with Next.js",
    languageSwitcher: "Switch language to spanish",
    themeToggle: {
      light: "Switch to light theme",
      dark: "Switch to dark theme",
    },
    expandableText: {
      false: "See more ↓",
      true: "See less ↑"
    }
  },
} as const;