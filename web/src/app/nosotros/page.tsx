'use client';

import * as React from 'react';
import { Navbar10 } from '@/components/ui/shadcn-io/navbar-10';
import { Target, Eye, BookOpen, Award, CheckCircle, Users, School, Lightbulb, HandHeart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NosotrosPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header */}
      <Navbar10 />

      {/* Main Content */}
      <main className="container mx-auto flex h-full grow flex-col px-4 py-8 md:py-12">
        <div className="layout-content-container flex w-full flex-col max-w-4xl mx-auto flex-1">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
            <div className="flex w-full flex-col gap-3 text-center">
              <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em]">
                Nuestra Institución
              </h1>
              <p className="text-muted-foreground text-base font-normal leading-normal max-w-2xl mx-auto">
                Conoce los pilares que definen nuestra comunidad educativa, desde nuestra historia y valores hasta nuestra misión para el futuro.
              </p>
            </div>
          </div>

          {/* Sticky Tabs Navigation */}
          <div className="sticky top-[65px] z-40 bg-background/80 backdrop-blur-sm pb-3 mb-8">
            <div className="flex border-b border-border px-4 gap-4 sm:gap-8 justify-center">
              <Link
                href="#mision-vision"
                className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 whitespace-nowrap"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Misión y Visión</p>
              </Link>
              <Link
                href="#historia"
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-muted-foreground hover:text-primary pb-[13px] pt-4 whitespace-nowrap transition-colors"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Historia</p>
              </Link>
              <Link
                href="#valores"
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-muted-foreground hover:text-primary pb-[13px] pt-4 whitespace-nowrap transition-colors"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Valores</p>
              </Link>
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Misión y Visión Section */}
            <section className="scroll-mt-32" id="mision-vision">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Misión y Visión
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {/* Misión Card */}
                <div className="flex flex-1 gap-3 rounded-xl border border-border bg-card p-6 flex-col">
                  <div className="text-primary">
                    <Target className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-card-foreground text-base font-bold leading-tight">Misión</h3>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Formar ciudadanos íntegros, críticos y competentes, a través de una educación de calidad que promueva el desarrollo de habilidades, conocimientos y valores para enfrentar los desafíos de una sociedad globalizada y en constante cambio.
                    </p>
                  </div>
                </div>

                {/* Visión Card */}
                <div className="flex flex-1 gap-3 rounded-xl border border-border bg-card p-6 flex-col">
                  <div className="text-primary">
                    <Eye className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-card-foreground text-base font-bold leading-tight">Visión</h3>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Ser una institución educativa líder, reconocida por su excelencia académica, innovación pedagógica y compromiso con el desarrollo integral de sus estudiantes, consolidándonos como un referente de transformación social en la comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Historia Section */}
            <section className="scroll-mt-32" id="historia">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Nuestra Historia
              </h2>
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-8 rounded-xl border border-border bg-card p-6">
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="text-primary">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Fundada en 1952, la Escuela Nacional José Félix Estigarribia nació con el compromiso de ofrecer una educación de vanguardia a la comunidad. A lo largo de las décadas, hemos crecido y evolucionado, superando desafíos y celebrando innumerables logros. Desde la inauguración de nuestro primer laboratorio de ciencias en 1975 hasta la implementación de nuestro programa de bilingüismo en 2010, cada hito ha reafirmado nuestra dedicación a la excelencia. Hoy, honramos nuestro pasado mientras miramos con entusiasmo hacia un futuro de innovación y oportunidades para nuestros estudiantes.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      className="rounded-lg object-cover w-full h-48 md:h-full"
                      alt="Fachada histórica del edificio de la escuela en blanco y negro."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEAzCddflqnciawRosZRQAjneAwDhV-prJb6DRtIUeYEV7RGs1yxh4s0aYS3CXW8wqc808DZqFw7kjtvy04gJxN7tX2jExbVGaBtVwbySQn_IfhoJ_KpKqVZG7szdFa8uZs-eLe7lI0ZQz5KHTB3FerhnJz1pjT6XV8OHhBZJheUMlo6CH0K5AhvgtZaxAyTplfQqa18LG_N2IYUAMn4kD7Iz-hcy976TEkcJhvhW67L3fEyUzS1Mejq7SS-yD892j0OijRMq4D4"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Valores Section */}
            <section className="scroll-mt-32 pb-12" id="valores">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Valores Institucionales
              </h2>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Excelencia */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Excelencia</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Buscamos la más alta calidad en todo lo que hacemos, fomentando la superación continua.
                  </p>
                </div>

                {/* Integridad */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Integridad</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Actuamos con honestidad, transparencia y ética en todas nuestras interacciones.
                  </p>
                </div>

                {/* Respeto */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <HandHeart className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Respeto</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Valoramos la diversidad de ideas y personas, promoviendo un ambiente de inclusión.
                  </p>
                </div>

                {/* Compromiso */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Compromiso</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Nos dedicamos al éxito de nuestros estudiantes y al bienestar de nuestra comunidad.
                  </p>
                </div>

                {/* Liderazgo */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <School className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Liderazgo</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Inspiramos y capacitamos a nuestros estudiantes para que sean líderes positivos.
                  </p>
                </div>

                {/* Innovación */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Innovación</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Fomentamos la creatividad y la adaptación a nuevas metodologías de enseñanza.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}