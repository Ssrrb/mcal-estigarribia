export interface StaffMember {
  name: string;
  shift: string;
  role: string;
}

export interface AreaHead {
  area: string;
  name: string;
}

export interface CommunityLeader {
  role: string;
  name: string;
}

export const management: StaffMember[] = [
    { name: "Mg. Marta Raquel Ramírez de Giménez", shift: "M,T,N.", role: "Directora General" },
    { name: "Lic. Victor Manuel Caballero Fernández", shift: "M", role: "Director de Turno Mañana" },
    { name: "Lic. Victor Rivaldi", shift: "N", role: "Dirección Turno Noche" },
];

export const communityLeaders: CommunityLeader[] = [
    { role: "Presidente del Centro de Estudiantes", name: "Horacio Medina" },
    { role: "Asociación Cooperadora Escolar (ACE)", name: "Ana Miranda" },
];

export const staff: StaffMember[] = [
  { name: "Marta Raquel Ramírez de Giménez", shift: "M,T,N.", role: "Directora General" },
  { name: "Víctor Manuel Caballero Fernández", shift: "M", role: "Director de Turno" },
  { name: "Victor Raúl Rivaldi Sanabria", shift: "N", role: "Encargado de Despacho Del T.N" },
  { name: "Nidia Isabel Centurión Santacruz", shift: "M y T", role: "Secretaria" },
  { name: "Diana Figueredo", shift: "M y T", role: "Secretaria" },
  { name: "Eulalia Acosta Ramos", shift: "T", role: "Jefe de Estudio y/o Prof. Guia" },
  { name: "Joel Ramón López Carballo", shift: "M", role: "Jefe de disciplina" },
  { name: "Gabriel Ramón Jara Guerrero", shift: "M", role: "Auxiliar Técnico Administrativo" },
  { name: "Rossana Beatriz Orihuela Velilla", shift: "M", role: "Auxiliar Técnico Administrativo" },
  { name: "Yrma Aurora González de Gómez", shift: "M y N", role: "Dinamizadora de C.R.A." },
  { name: "Oscar Fernando Álvarez Orrabalis", shift: "M", role: "Jefe de Disciplina" },
  { name: "María Laura Orihuela", shift: "M", role: "Evaluador Educacional" },
  { name: "Blanca Azucena Ayala", shift: "M y T", role: "Coordinador Técnico Pedagógico" },
  { name: "Mirna Elizabeth Ramírez Salinas", shift: "M y T", role: "Evaluador Educacional" },
  { name: "Mirtha Graciela Benítez Giménez", shift: "M", role: "Prof. Guía" },
  { name: "Selva Acosta de Ávalos", shift: "N", role: "Encargada de Laboratorio de Informática" },
  { name: "Julia Nicolaza Avalos González", shift: "T", role: "Dinamizadora de C.R.A." },
  { name: "Delia Mabel González Alcaraz", shift: "T", role: "Coordinador de Área" },
  { name: "Antonia Rodas de Barrios", shift: "T", role: "Jefe de Estudios" },
  { name: "Nancy Estella Báez Mendoza", shift: "N", role: "Auxiliar Técnico Administrativo" },
  { name: "Victor Daniel Torales González", shift: "T", role: "Coordinador Técnico Pedagógico" },
  { name: "Atilio Ramón Silva Torales", shift: "N", role: "Jefe de Estudios" },
  { name: "Cinthia Maria Torres", shift: "M", role: "Coordinadora de Proyecto" },
  { name: "Blanca Zunilda Alcaraz Acuña", shift: "N", role: "Evaluadora T.N" },
];

export const areaHeads: AreaHead[] = [
  { area: "Ciencias Básicas", name: "Lic. Mariza Franco" },
  { area: "Ciencias Sociales", name: "Lic. María Celestina Mendoza" },
  { area: "Matemática", name: "Lic. Blanca Cuba" },
  { area: "Trabajo y Tecnología", name: "Lic. Luis Esteban Mendoza" },
  { area: "Educación Artística", name: "Lic. Julia Nicolasa Ávalos González" },
  { area: "Lengua Castellana", name: "Lic. Zunilda Mercedes Mendoza" },
  { area: "Lengua Guaraní", name: "Lic. Delia Almada Alvarenga" },
  { area: "Informática", name: "Lic. Cynthia Gómez Pereira" },
  { area: "Contabilidad", name: "Lic. Nilda Velilla" },
  { area: "Educación Física", name: "Hugo Torales" },
  { area: "Lengua Inglesa", name: "Raquel Orihuela" },
  { area: "Diseño Gáfico", name: "Rosa Santacruz" },
];
