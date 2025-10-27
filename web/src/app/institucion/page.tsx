'use client';

import * as React from 'react';
import { Navbar10 } from '@/components/ui/shadcn-io/navbar-10';
import { Target, Eye, BookOpen, Heart, Scale, ShieldCheck, Handshake, Feather, Sparkles, School } from 'lucide-react';
import Link from 'next/link';
import {FooterSimple} from '@/components/regular/footer'

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
                      Forjar y consolidar la formación integral de la persona humana, cuya morada son la dignidad y la libertad, al servicio de una convivencia armónica y democrática orientada hacia el bien común mediante la participación solidaria y eficiente de toda la comunidad educativa.
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
                      Proyectarnos e insertarnos en la comunidad con dinamismo e identidad propia, ofreciendo servicios educativos de calidad y promoviendo jóvenes con sólida formación humana, cristiana y personal que se conviertan en agentes de cambios positivos en la sociedad carapegüeña.
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
                      Una rica historia de lucha, amor por la educación y esperanza en el pueblo enmarca la vida del Colegio Nacional E.M.D. Mariscal José Félix Estigarribia, institución nacida para responder a las necesidades de la comunidad carapegüeña.
                    </p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Tras la habilitación del nuevo local de la Escuela República de Nicaragua en 1927, en 1929 se creó la Escuela Media N.º 1939. En 1940, ante el fallecimiento del Mariscal José Félix Estigarribia, la comunidad solicitó adoptar su nombre, consolidándose como Escuela Superior Mariscal Estigarribia en 1941. El edificio propio fue inaugurado el 22 de junio de 1946, convirtiéndose desde entonces en un verdadero pedestal de la educación regional.
                    </p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      El crecimiento continuó con la habilitación de la Escuela Normal de Maestros en 1953, su oficialización en 1955 y la posterior denominación de Escuela Normal N.º 15 de Profesores en 1959. Desde 1973 la institución apostó por bachilleratos científicos y técnicos, incorporando propuestas como Contabilidad, Informática, Asistencia Deportiva y Diseño Gráfico, además de fortalecer la infraestructura con laboratorios especializados.
                    </p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Hoy, con oferta en los tres turnos y en todos los niveles del tercer ciclo y la educación media, el colegio sigue destacándose por sus proyectos, ferias científicas y participación comunitaria, proyectando al estudiantado a nivel regional, nacional e internacional.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      className="rounded-lg object-cover w-full h-48 md:h-full"
                      alt="Fachada histórica del edificio de la escuela en blanco y negro."
                      src="escuela2.jpeg"
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
                {/* Amor */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Amor</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Promovemos el amor en un mundo que muchas veces se muestra egoísta e indiferente.
                  </p>
                </div>

                {/* Justicia */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Scale className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Justicia</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Defendemos la justicia frente a las diversas formas de injusticia y exclusión.
                  </p>
                </div>

                {/* Paz */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <School className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Paz</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Construimos la paz como respuesta a la violencia y a los conflictos cotidianos.
                  </p>
                </div>

                {/* Honestidad */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Honestidad</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Sostenemos la honestidad frente a la corrupción y cualquier falta de transparencia.
                  </p>
                </div>

                {/* Solidaridad */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Solidaridad</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Fomentamos la solidaridad en oposición al individualismo y la competencia.
                  </p>
                </div>

                {/* Sobriedad */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Feather className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Sobriedad</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Vivimos la sobriedad como alternativa a una sociedad sustentada en el consumismo.
                  </p>
                </div>

                {/* Contemplación y gratuidad */}
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <div className="text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground text-base font-bold leading-tight">Contemplación y gratuidad</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">
                    Cultivamos la contemplación y la gratuidad frente al pragmatismo y al utilitarismo.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      <FooterSimple/>
      </main>
    </div>
  );
}
