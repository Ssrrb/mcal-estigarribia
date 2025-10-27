'use client';

import * as React from 'react';
import { Navbar10 } from '@/components/ui/shadcn-io/navbar-10';
import {FooterSimple} from '@/components/regular/footer' 
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import {
  Sun,
  Sunset,
  Moon,
  Users,
  FlaskConical,
  Laptop,
  Coins,
  Palette,
  Trophy,
} from 'lucide-react';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights?: string[];
}

const OfferingCard = ({
  icon,
  title,
  description,
  highlights = [],
}: OfferingCardProps) => {
  return (
    <Card className="flex flex-col gap-3 p-4 transition-shadow hover:shadow-lg">
      <span className="text-primary">{icon}</span>
      <h3 className="text-base font-bold leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-normal">
        {description}
      </p>
      {highlights.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

const tercerCiclo = [
  {
    id: 'manana',
    icon: <Sun className="h-6 w-6" />,
    title: 'Turno Mañana',
    description:
      'Educación Escolar Básica – 3º Ciclo con tres secciones por grado para acompañar distintos ritmos de aprendizaje.',
    highlights: [
      '7º Grado: 1ª, 2ª y 3ª Sección',
      '8º Grado: 1ª, 2ª y 3ª Sección',
      '9º Grado: 1ª, 2ª y 3ª Sección',
    ],
  },
  {
    id: 'tarde',
    icon: <Sunset className="h-6 w-6" />,
    title: 'Turno Tarde',
    description:
      'Educación Escolar Básica – 3º Ciclo con énfasis en el acompañamiento académico y socioemocional.',
    highlights: [
      '7º Grado: 1ª y 2ª Sección',
      '8º Grado: 1ª y 2ª Sección',
      '9º Grado: 1ª y 2ª Sección',
    ],
  },
  {
    id: 'noche',
    icon: <Moon className="h-6 w-6" />,
    title: 'Turno Noche',
    description:
      'Educación Escolar Básica – 3º Ciclo adaptada a estudiantes del turno nocturno.',
    highlights: ['7º Grado', '8º Grado', '9º Grado'],
  },
];

const bachilleratos = [
  {
    id: 'ciencias-sociales',
    icon: <Users className="h-6 w-6" />,
    title: 'Bachillerato Científico con Énfasis en Ciencias Sociales',
    description:
      'Potencia la comprensión crítica de la realidad social y prepara para trayectorias universitarias en ciencias humanas.',
    shifts: [
      {
        name: 'Turno Mañana',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
      {
        name: 'Turno Noche',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
  {
    id: 'ciencias-basicas',
    icon: <FlaskConical className="h-6 w-6" />,
    title: 'Bachillerato Científico con Énfasis en Ciencias Básicas',
    description:
      'Fortalece las habilidades científicas con laboratorios activos en biología, física y química, pilar para carreras STEM.',
    shifts: [
      {
        name: 'Turno Mañana',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
      {
        name: 'Turno Tarde',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
  {
    id: 'contabilidad',
    icon: <Coins className="h-6 w-6" />,
    title: 'Bachillerato Técnico en Contabilidad',
    description:
      'Desarrolla competencias en administración, costos y legislación tributaria para el ejercicio profesional y la continuidad académica.',
    shifts: [
      {
        name: 'Turno Mañana',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
      {
        name: 'Turno Tarde',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
  {
    id: 'asistencia-deportiva',
    icon: <Trophy className="h-6 w-6" />,
    title: 'Bachillerato Técnico en Asistencia Deportiva',
    description:
      'Promueve la salud integral y la gestión deportiva con prácticas en el acompañamiento de atletas y eventos institucionales.',
    shifts: [
      {
        name: 'Turno Mañana',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
  {
    id: 'diseno-grafico',
    icon: <Palette className="h-6 w-6" />,
    title: 'Bachillerato Técnico en Diseño Gráfico y Publicidad',
    description:
      'Integra creatividad, herramientas digitales y comunicación visual para proyectos de diseño y producción gráfica.',
    shifts: [
      {
        name: 'Turno Tarde',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
  {
    id: 'informatica',
    icon: <Laptop className="h-6 w-6" />,
    title: 'Bachillerato Técnico en Informática',
    description:
      'Formación especializada en desarrollo de software, redes y soporte tecnológico para responder a los desafíos de la era digital.',
    shifts: [
      {
        name: 'Turno Tarde',
        courses: ['1º Curso', '2º Curso', '3º Curso'],
      },
    ],
  },
];

export default function AcademicoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar10 />
      <main className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 py-10 sm:px-8 md:px-16 md:py-16 lg:px-24 xl:px-40">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-wrap justify-between gap-4 px-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-black leading-tight tracking-tighter lg:text-5xl">
                  Nuestra Oferta Académica
                </h1>
                <p className="text-base font-normal leading-normal text-muted-foreground lg:text-lg">
                  Conoce los programas educativos del Colegio Nacional E.M.D. Mcal.
                  José Félix Estigarribia: desde el 3º ciclo de la Educación Escolar
                  Básica hasta los bachilleratos científicos y técnicos que acompañan
                  los intereses de cada estudiante.
                </p>
              </div>
            </div>
            <Tabs defaultValue="tercer-ciclo" className="w-full">
              <div className="px-4">
                <TabsList className="h-auto w-full justify-start rounded-none border-b border-border bg-transparent p-0">
                  <TabsTrigger
                    value="tercer-ciclo"
                    className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-4 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Educación Escolar Básica – 3º Ciclo
                  </TabsTrigger>
                  <TabsTrigger
                    value="bachilleratos"
                    className="ml-8 rounded-none border-b-2 border-transparent px-0 pb-3 pt-4 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Bachilleratos
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent
                value="tercer-ciclo"
                className="mt-6 flex flex-col gap-6"
              >
                <div className="px-4">
                  <h2 className="pt-6 text-3xl font-bold leading-tight tracking-tight">
                    Educación Escolar Básica - 3º Ciclo
                  </h2>
                  <p className="pt-2 text-base font-normal leading-normal">
                    El tercer ciclo abarca los grados 7º, 8º y 9º y se organiza en
                    los turnos mañana, tarde y noche, siguiendo las secciones y
                    cursos establecidos en la planificación institucional.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tercerCiclo.map((turno) => (
                    <OfferingCard
                      key={turno.id}
                      icon={turno.icon}
                      title={turno.title}
                      description={turno.description}
                      highlights={turno.highlights}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent
                value="bachilleratos"
                className="mt-6 flex flex-col gap-6"
              >
                <div className="px-4">
                  <h2 className="pt-6 text-3xl font-bold leading-tight tracking-tight">
                    Bachilleratos
                  </h2>
                  <p className="pt-2 text-base font-normal leading-normal">
                    Ofrecemos opciones científicas y técnicas desarrolladas en los
                    turnos de mañana, tarde y noche, de acuerdo con la oferta
                    académica vigente de la institución.
                  </p>
                </div>
                <div className="px-4">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="ciencias-sociales"
                    className="flex flex-col gap-3"
                  >
                    {bachilleratos.map((bachillerato) => (
                      <AccordionItem
                        key={bachillerato.id}
                        value={bachillerato.id}
                        className="rounded-lg border border-border bg-card px-4 transition-shadow hover:shadow-lg last:border-b"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3">
                            <span className="text-primary">
                              {bachillerato.icon}
                            </span>
                            <h3 className="text-base font-bold">
                              {bachillerato.title}
                            </h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pb-2 pt-2 text-sm">
                            <p className="mb-4">{bachillerato.description}</p>
                            <div className="flex flex-col gap-2">
                              {bachillerato.shifts.map((shift) => (
                                <div
                                  key={shift.name}
                                  className="rounded-lg border border-dashed border-border/60 bg-muted/50 p-3"
                                >
                                  <p className="text-sm font-semibold text-foreground">
                                    {shift.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Cursos: {shift.courses.join(', ')}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      <FooterSimple/>
      </main>
    </div>
  );
}

