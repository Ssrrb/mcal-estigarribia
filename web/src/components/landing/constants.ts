export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=350&q=60",
  },
];

export const companyLogos = [
  { id: 1, name: "Nation" },
  { id: 2, name: "Jumexo" },
  { id: 3, name: "Revocalize" },
  { id: 4, name: "NARADA" },
  { id: 5, name: "AgentBoost" },
];

export type NavigationLinkItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavigationLink = {
  id: number;
  href: string;
  label: string;
  items?: NavigationLinkItem[];
};

export const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    href: "#nosotros",
    label: "Nosotros",
    items: [
      { title: "Misión y Visión", href: "#nosotros-mision-vision" },
      {
        title: "Historia",
        href: "/nosotros/historia",
        description: "Conoce la trayectoria institucional.",
      },
      {
        title: "Valores Institucionales",
        href: "/nosotros/valores",
        description: "Principios que guían nuestra comunidad educativa.",
      },
    ],
  },
  {
    id: 2,
    href: "/academico",
    label: "Académico",
    items: [
      {
        title: "Educación Escolar Básica - 3° Ciclo",
        href: "#academico-basica",
      },
      {
        title: "Bachilleratos",
        href: "#academico-bachilleratos",
        description: "Opciones formativas para el desarrollo integral.",
      },
    ],
  },
  { id: 3, href: "/contacto", label: "Contacto" },
  {
    id: 4,
    href: "/autoridades",
    label: "Autoridades",
    items: [
      { title: "Dirección General", href: "#autoridades-direccion" },
      { title: "Personal Administrativo", href: "#autoridades-administrativo" },
      { title: "Jefes de Área", href: "#autoridades-jefes-area" },
      { title: "Centro de Estudiantes", href: "#autoridades-centro-estudiantes" },
      {
        title: "Asociación Cooperadora",
        href: "#autoridades-cooperadora",
      },
    ],
  },
  { id: 5, href: "/destacados", label: "Destacado" },
];

export const mobileNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    href: "#nosotros",
    label: "Nosotros",
    items: [
      { title: "Misión y Visión", href: "#nosotros-mision-vision" },
      {
        title: "Historia (Reseña histórica)",
        href: "#nosotros-historia",
      },
      { title: "Valores Institucionales", href: "#nosotros-valores" },
    ],
  },
  {
    id: 2,
    href: "#academico",
    label: "Académico",
    items: [
      {
        title: "Educación Escolar Básica - 3° Ciclo",
        href: "#academico-basica",
      },
      { title: "Bachilleratos", href: "#academico-bachilleratos" },
    ],
  },
  { id: 3, href: "#contacto", label: "Contacto" },
  {
    id: 4,
    href: "#autoridades",
    label: "Autoridades",
    items: [
      { title: "Dirección General", href: "#autoridades-direccion" },
      { title: "Personal Administrativo", href: "#autoridades-administrativo" },
      { title: "Jefes de Área", href: "#autoridades-jefes-area" },
      { title: "Centro de Estudiantes", href: "#autoridades-centro-estudiantes" },
      { title: "Asociación Cooperadora", href: "#autoridades-cooperadora" },
    ],
  },
  { id: 5, href: "#destacado", label: "Destacado" },
];
