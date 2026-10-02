export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  featured?: boolean;
  bulletPoints: string[];
  ctaText: string;
  defaultMessage: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string };
  technologies: string[];
  image: string;
  accentColor: string;
  detailedCaseStudy?: {
    overview: string;
    deliverables: string[];
    testimonialQuote?: string;
  };
}

export interface ToolCategory {
  category: string;
  items: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  verifyUrl: string;
  iconType: 'google' | 'cisco';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  relationship?: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const CONTACT_INFO = {
  name: 'Abilia Venegas',
  title: 'Ingeniera en Informática · Full Stack & AI',
  phoneDisplay: '+52 462 245 0193',
  phoneClean: '524622450193',
  email: 'abiliavblossom@gmail.com',
  whatsappUrl: 'https://wa.me/524622450193?text=Hola%20Abilia,%20quiero%20cotizar%20un%20proyecto',
  linkedinUrl: 'https://www.linkedin.com/in/abilia-venegas-dep',
  behanceUrl: 'https://www.behance.net/abiliavg'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sitios-web',
    title: 'Sitios Web & Plataformas',
    tagline: 'Desarrollo web a medida con carga ultrarrápida (< 1s).',
    featured: true,
    bulletPoints: [
      'React, TypeScript & Node.js',
      'SEO técnico & Core Web Vitals',
      'Catálogos, pasarelas y paneles SaaS'
    ],
    ctaText: 'Cotizar sitio →',
    defaultMessage: 'Hola Abilia, quiero cotizar un sitio web o plataforma a la medida.',
    iconName: 'Globe'
  },
  {
    id: 'automatizacion-ia',
    title: 'Automatización con IA',
    tagline: 'Conecta herramientas y elimina tareas repetitivas.',
    featured: false,
    bulletPoints: [
      'Agentes y flujos automáticos 24/7',
      'Automatización de tareas',
      'Soluciones a problemas específicos'
    ],
    ctaText: 'Automatizar procesos →',
    defaultMessage: 'Hola Abilia, quiero automatizar tareas y procesos en mi negocio con IA.',
    iconName: 'Cpu'
  },
  {
    id: 'moodle-lms',
    title: 'Plataformas Moodle LMS',
    tagline: 'Aulas virtuales estables y seguras para instituciones.',
    featured: false,
    bulletPoints: [
      'Instalación y configuración en servidores VPS',
      'Matrículas, cursos, roles y evaluaciones',
      'Respaldos automáticos y soporte'
    ],
    ctaText: 'Cotizar Moodle →',
    defaultMessage: 'Hola Abilia, me interesa implementar o migrar una plataforma Moodle.',
    iconName: 'GraduationCap'
  },
  {
    id: 'infraestructura-ciberseguridad',
    title: 'Servidores & Seguridad TI',
    tagline: 'Servidores blindados y control total de accesos.',
    featured: false,
    bulletPoints: [
      'Linux, Windows Server y VPS Cloud',
      'Políticas de seguridad y redes VPN',
      'Monitoreo continuo y respaldos cifrados'
    ],
    ctaText: 'Solicitar diagnóstico →',
    defaultMessage: 'Hola Abilia, quiero un diagnóstico de servidores y seguridad TI.',
    iconName: 'ShieldCheck'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'branding-builder',
    title: 'Branding Builder',
    category: 'Identidad Visual & Diseño',
    clientType: 'SaaS · Marcas Digitales',
    challenge: 'Crear manuales de marca requería semanas de trabajo manual disperso.',
    solution: 'App que genera paletas accesibles, tipografías y manuales PDF al instante.',
    result: '80% de ahorro de tiempo y +50 identidades generadas.',
    metrics: { label: 'Identidades generadas', value: '+50' },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'PDF Export'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2DD4BF',
    detailedCaseStudy: {
      overview: 'Suite modular de diseño y branding para creación veloz de manuales corporativos.',
      deliverables: [
        'Generador cromático con validación de contraste WCAG AA',
        'Previsualizador interactivo de fuentes y jerarquías',
        'Exportador de manual de identidad en PDF vectorial'
      ]
    }
  },
  {
    id: 'generador-contenidos',
    title: 'Generador de Contenidos',
    category: 'Creación de Contenidos & Marketing',
    clientType: 'Agencias & Equipos de Contenido',
    challenge: 'Bloqueos creativos y demora al redactar para múltiples canales.',
    solution: 'Plataforma que aprende el tono de marca y genera artículos SEO y copys en un clic.',
    result: '+300% en volumen mensual de publicaciones con voz unificada.',
    metrics: { label: 'Más producción', value: '+300%' },
    technologies: ['React', 'Gemini API', 'Python', 'Tailwind CSS', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2DD4BF',
    detailedCaseStudy: {
      overview: 'Motor inteligente de copywriting y planificación editorial optimizado para SEO.',
      deliverables: [
        'Editor semántico asistido con prompts optimizados',
        'Generador de ganchos para LinkedIn, X e Instagram',
        'Control de borradores con exportación directa'
      ]
    }
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    category: 'Analítica en Tiempo Real & BI',
    clientType: 'Finanzas & Operaciones B2B',
    challenge: 'Reportes lentos y hojas de cálculo pesadas que frenaban decisiones.',
    solution: 'Panel analítico interactivo con gráficos en vivo, filtros rápidos y alertas de KPIs.',
    result: 'Renderizado en < 100ms y monitoreo en vivo de +50 métricas.',
    metrics: { label: 'Velocidad', value: '< 100ms' },
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2DD4BF',
    detailedCaseStudy: {
      overview: 'Panel ejecutivo de datos con visualización fluida y responsive para directivos.',
      deliverables: [
        'Gráficos interactivos de líneas, barras y embudos',
        'Filtros por periodo, sucursal y canal de ventas',
        'Alertas instantáneas para desviaciones de KPIs'
      ]
    }
  },
  {
    id: 'calendar-task',
    title: 'Calendar & Task Manager',
    category: 'Productividad & Organización',
    clientType: 'Consultorías & Organización Personal-Laboral',
    challenge: 'Desorganización entre citas, entregables y saturación de tareas diarias.',
    solution: 'Sistema centralizado con vista de calendario, tablero de tareas y recordatorios.',
    result: '100% de entregas a tiempo y organización clara del día a día.',
    metrics: { label: 'Entregas a tiempo', value: '100%' },
    technologies: ['React', 'TypeScript', 'Calendar Sync', 'DnD Kanban', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2DD4BF',
    detailedCaseStudy: {
      overview: 'Plataforma para consultores y profesionales que buscan centralizar su agenda y compromisos laborales.',
      deliverables: [
        'Calendario interactivo con vistas mensual, semanal y diaria',
        'Tablero Kanban para tareas prioritarias y seguimiento personal-laboral',
        'Recordatorios automáticos y sincronización de horarios'
      ]
    }
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tus Gustos & Necesidades',
    description: 'Conversamos sobre tu visión, estilo visual preferido y flujos de trabajo para crear algo único para ti.',
    duration: '15 min · Sin costo',
    badge: '100% Personalizado'
  },
  {
    step: '02',
    title: 'Propuesta a tu Medida',
    description: 'Arquitectura adaptada a tus gustos, alcance técnico claro, fechas y presupuesto cerrado.',
    duration: '24 a 48 hrs',
    badge: 'Sin sorpresas'
  },
  {
    step: '03',
    title: 'Desarrollo Dedicado',
    description: 'Construcción con código limpio, revisiones periódicas contigo y adaptaciones en tiempo real.',
    duration: 'Iterativo',
    badge: 'Avances continuos'
  },
  {
    step: '04',
    title: 'Entrega & Capacitación',
    description: 'Puesta en marcha, entrega de accesos maestros y capacitación para que tengas control total.',
    duration: '30 días garantía',
    badge: '100% tuyo'
  }
];

export const TOOLS_DATA: ToolCategory[] = [
  {
    category: 'Desarrollo',
    items: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'PHP', 'MySQL', 'WordPress']
  },
  {
    category: 'Infraestructura',
    items: ['Linux', 'Windows Server', 'VPS Cloud', 'Moodle LMS', 'Nginx', 'Ciberseguridad', 'Git']
  },
  {
    category: 'Inteligencia Artificial',
    items: ['Gemini', 'Claude', 'GPT', 'Prompt Engineering', 'Automatización de Flujos']
  },
  {
    category: 'Diseño & Analytics',
    items: ['Figma', 'Photoshop', 'Illustrator', 'SEO Técnico', 'Google Analytics']
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Google AI Professional Certificate',
    issuer: 'Google',
    year: '2024',
    credentialId: 'GOOG-AI-2024-AV',
    verifyUrl: 'https://grow.google/certificates/',
    iconType: 'google'
  },
  {
    name: 'Google Marketing Digital y E-commerce',
    issuer: 'Google',
    year: '2024',
    credentialId: 'GOOG-MKT-2024-AV',
    verifyUrl: 'https://grow.google/certificates/',
    iconType: 'google'
  },
  {
    name: 'Cisco Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    credentialId: 'CISCO-CS-2023-AV',
    verifyUrl: 'https://www.netacad.com/',
    iconType: 'cisco'
  },
  {
    name: 'Cisco NDG Linux Essentials',
    issuer: 'Cisco / NDG',
    year: '2023',
    credentialId: 'CISCO-LNX-2023-AV',
    verifyUrl: 'https://www.netacad.com/',
    iconType: 'cisco'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-karla-vanzzini',
    quote: 'Aby es una persona altamente comprometida, muy profesional, dedicada con su trabajo, muy humana que sabe trabajar en equipo y trabajar en base a los objetivos que plantea la institución. Tiene dominio en la herramientas tecnologícas y de mkt digital.',
    name: 'Karla Vanzzini',
    role: 'Directora Comercial',
    company: 'VANGAL',
    relationship: 'Supervisaba directamente a Abilia',
    avatar: 'karla.jpeg'
  },
  {
    id: 'test-karen-elias',
    quote: 'Excelente Profesional, una persona muy dedicada, entusiasta, participativa, creativa, responsable y con bastante disposición para colaborar con sus compañeros, proponer ideas, desarrollar mejoras, autodidacta, con grandes habilidades para soporte TI, gestión de correo, nube, herramientas de colaboración y marketing digital... gracias por toda tu entrega, por ser tan servicial y tener una gran actitud!!! Que sigas creciendo en todos los aspectos, sigue creando, aprendiendo y superando cada reto... un placer trabajar contigo siempre!!! ÉXITO :)',
    name: 'Karen Elías',
    role: 'Gerente de Ventas Bajío y Norte',
    company: 'NETSKY SOLUTIONS',
    relationship: 'Supervisaba directamente a Abilia',
    avatar: 'karen.jpeg'
  },
  {
    id: 'test-3',
    quote: 'Muy clara, directa y altamente técnica. Resuelve requerimientos de negocio sin tecnicismos innecesarios.',
    name: 'Lic. Elena Garza',
    role: 'Fundadora',
    company: 'EduTalent Consultores',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuánto cuesta un proyecto?',
    answer: 'Presupuesto cerrado y sin sorpresas. Sitios web y landing pages desde $3,500 MXN (pago único, sin mensualidades forzosas). Plataformas Moodle e integraciones con IA se cotizan a la medida de tu negocio.',
    highlight: 'Sitios desde $3,500 MXN (Pago único)'
  },
  {
    id: 'faq-2',
    question: '¿Cuáles son los tiempos de entrega?',
    answer: 'Sitios web: 2 a 3 semanas. Plataformas e integraciones con IA: 3 a 5 semanas con cronograma por escrito.',
    highlight: '2 a 3 semanas'
  },
  {
    id: 'faq-3',
    question: '¿Qué garantía y soporte recibo?',
    answer: '30 días de garantía técnica incluidos, video-capacitación personalizada y opción de mantenimiento mensual.',
    highlight: '30 días de garantía'
  },
  {
    id: 'faq-4',
    question: '¿El código y accesos son míos?',
    answer: 'Sí, 100% tuyos. Dominio, hosting, repositorios y contenidos te pertenecen por completo desde el día uno.',
    highlight: 'Propiedad 100% tuya'
  },
  {
    id: 'faq-5',
    question: '¿Trabajas con clientes remotos?',
    answer: 'Sí, atiendo proyectos en todo México y el extranjero con videollamadas y comunicación directa por WhatsApp.',
    highlight: 'Remoto · Global'
  },
  {
    id: 'faq-6',
    question: '¿Ofreces diagnóstico previo?',
    answer: 'Sí. Ofrezco una revisión inicial sin costo para evaluar velocidad, SEO técnico y seguridad básica.',
    highlight: 'Diagnóstico inicial sin costo'
  }
];
