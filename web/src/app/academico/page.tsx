'use client';

import * as React from 'react';
import { Navbar10 } from '@/components/ui/shadcn-io/navbar-10';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Landmark,
  Users,
  Laptop,
  Coins,
} from 'lucide-react';

interface SubjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SubjectCard = ({ icon, title, description }: SubjectCardProps) => {
  return (
    <Card className="flex flex-col gap-4 p-4 transition-shadow hover:shadow-lg">
      <div className="text-primary">{icon}</div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-normal">
          {description}
        </p>
      </div>
    </Card>
  );
};

const bachilleratos = [
  {
    id: 'ciencias-sociales',
    icon: <Users className="h-6 w-6" />,
    title: 'Bachillerato Cientifico con Enfasis en Ciencias Sociales',
    description: 'Este programa se enfoca en el estudio de la sociedad, la cultura y las relaciones humanas. Ideal para estudiantes con interes en derecho, psicologia, sociologia y comunicacion.',
    subjects: ['Historia y Geografia', 'Economia y Gestion', 'Filosofia y Etica', 'Investigacion Social'],
  },
  {
    id: 'informatica',
    icon: <Laptop className="h-6 w-6" />,
    title: 'Bachillerato Tecnico en Informatica',
    description: 'Formacion especializada en tecnologia, software y sistemas. Prepara a los estudiantes para carreras en desarrollo de software, administracion de redes y seguridad informatica.',
    subjects: ['Algoritmos y Programacion', 'Bases de Datos', 'Redes de Computadoras', 'Diseno y Desarrollo Web'],
  },
  {
    id: 'contabilidad',
    icon: <Coins className="h-6 w-6" />,
    title: 'Bachillerato Tecnico en Contabilidad',
    description: 'Prepara a los estudiantes con una solida base en principios contables, gestion financiera y legislacion tributaria, abriendo puertas a carreras en finanzas y administracion de empresas.',
    subjects: ['Contabilidad General y de Costos', 'Legislacion Tributaria y Laboral', 'Administracion y Finanzas', 'Calculo Mercantil'],
  },
];

export default function AcademicoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar10 />
      <main className="flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10 md:py-16">
          <div className="flex flex-col max-w-[960px] flex-1 gap-8">
            <div className="flex flex-wrap justify-between gap-4 px-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter">Nuestra Oferta Academica</h1>
                <p className="text-muted-foreground text-base lg:text-lg font-normal leading-normal max-w-2xl">
                  Un panorama de nuestra filosofia educativa y el compromiso con la excelencia que ofrecemos a cada estudiante.
                </p>
              </div>
            </div>
            <Tabs defaultValue="tercer-ciclo" className="w-full">
              <div className="px-4">
                <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b border-border rounded-none">
                  <TabsTrigger value="tercer-ciclo" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3 pt-4">
                    3° Ciclo Escolar Basica
                  </TabsTrigger>
                  <TabsTrigger value="bachilleratos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3 pt-4 ml-8">
                    Bachilleratos
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="tercer-ciclo" className="flex flex-col gap-6 mt-6">
                <div className="px-4">
                  <h2 className="tracking-tight text-3xl font-bold leading-tight pt-6">Educacion Escolar Basica - 3° Ciclo</h2>
                  <p className="text-base font-normal leading-normal pt-2">
                    El Tercer Ciclo, abarcando los grados 7°, 8° y 9°, esta disenado para consolidar los conocimientos fundamentales y preparar a los estudiantes para los desafios del bachillerato. Nuestro enfoque se centra en el desarrollo de habilidades criticas, la resolucion de problemas y el fomento de la curiosidad intelectual a traves de un curriculo integral y actividades extracurriculares enriquecedoras.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                  <SubjectCard icon={<Calculator className="h-6 w-6" />} title="Matematicas" description="Logica y resolucion de problemas" />
                  <SubjectCard icon={<FlaskConical className="h-6 w-6" />} title="Ciencias Naturales" description="Biologia, fisica y quimica" />
                  <SubjectCard icon={<BookOpen className="h-6 w-6" />} title="Lengua y Literatura" description="Analisis y comunicacion" />
                  <SubjectCard icon={<Landmark className="h-6 w-6" />} title="Estudios Sociales" description="Historia y geografia" />
                </div>
              </TabsContent>
              <TabsContent value="bachilleratos" className="flex flex-col gap-6 mt-6">
                <div className="px-4">
                  <h2 className="tracking-tight text-3xl font-bold leading-tight pt-6">Bachilleratos</h2>
                  <p className="text-base font-normal leading-normal pt-2">
                    Ofrecemos diversas especializaciones de bachillerato disenadas para potenciar las habilidades e intereses de cada estudiante, preparandolos para la educacion superior y el mundo profesional.
                  </p>
                </div>
                <div className="px-4">
                  <Accordion type="single" collapsible defaultValue="ciencias-sociales" className="flex flex-col gap-3">
                    {bachilleratos.map((bachillerato) => (
                      <AccordionItem key={bachillerato.id} value={bachillerato.id} className="rounded-lg border border-border bg-card transition-shadow hover:shadow-lg px-4 last:border-b">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3">
                            <span className="text-primary">{bachillerato.icon}</span>
                            <h3 className="text-base font-bold">{bachillerato.title}</h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-2 text-sm">
                            <p className="mb-4">{bachillerato.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {bachillerato.subjects.map((subject, index) => (<li key={index}>{subject}</li>))}
                            </ul>
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
      </main>
    </div>
  );
}
