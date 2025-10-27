"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {
  ArrowRight,
  Check,
  Cpu,
  FlaskConical,
  Medal,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import HoverTranslateTwo from "@/app/destacado/interactive-card-stack";
import Image from "next/image";
import { FooterSimple } from "@/components/regular/footer";
import { Navbar10 } from "@/components/ui/shadcn-io/navbar-10";



const Feature1 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Chart bar animation variants
  const barVariants = {
    hidden: { scaleY: 0, originY: 1 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        delay: 2.8 + i * 0.1, // Start after chart container appears
        duration: 0.8,
      },
    }),
  };

  // Animated content variants used in cards
  const colorClasses = {
    green: "before:bg-green-500 shadow-green-500/20",
    orange: "before:bg-orange-500 shadow-orange-500/20",
    blue: "before:bg-blue-500 shadow-blue-500/20",
    pink: "before:bg-pink-500 shadow-pink-500/20",
  };
  const accentShadows: Record<keyof typeof colorClasses, string> = {
    green: "0 10px 15px -3px rgb(34 197 94 / 0.1)",
    orange: "0 10px 15px -3px rgb(249 115 22 / 0.1)",
    blue: "0 10px 15px -3px rgb(59 130 246 / 0.1)",
    pink: "0 10px 15px -3px rgb(244 114 182 / 0.12)",
  };
  const accentIconColor: Record<keyof typeof colorClasses, string> = {
    green: "text-emerald-500",
    orange: "text-orange-500",
    blue: "text-blue-500",
    pink: "text-pink-500",
  };
  const hungerPrograms: Array<{
    title: string;
    desc: string;
    color: keyof typeof colorClasses;
    rotation: number;
    icon: LucideIcon;
  }> = [
    {
      title: "Laboratorio de Informática",
      desc: "Integración de alfabetización digital y robótica para todos los ciclos.",
      color: "green",
      rotation: 0,
      icon: Cpu,
    },
    {
      title: "Taller de Diseño Gráfico",
      desc: "La creatividad se conecta con proyectos reales para la comunidad.",
      color: "orange",
      rotation: 3,
      icon: Palette,
    },
    {
      title: "Laboratorio de Ciencias",
      desc: "Experiencias experimentales guiadas con enfoque STEAM y sostenibilidad.",
      color: "blue",
      rotation: -1,
      icon: FlaskConical,
    },
    {
      title: "Asistencia Deportiva",
      desc: "Formación física y acompañamiento nutricional para equipos escolares.",
      color: "pink",
      rotation: -1,
      icon: Medal,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto p-4" ref={featuresRef}>
      <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="md:text-5xl sm:text-4xl text-3xl font-medium"
        >
          Programas que transforman <br />
          la experiencia estudiantil
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
        >
          Acompañamos el aprendizaje con ciencia, arte, deporte y solidaridad
          para que cada estudiante descubra su vocación y proyecte impacto en la comunidad.
        </TimelineContent>
      </article>
      <div className="grid grid-cols-12 gap-4">
        {/* Interactive Card Stack */}
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative w-full h-[350px] rounded-xl overflow-hidden border border-neutral-200"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#b0b0b02e_1px,transparent_1px),linear-gradient(to_bottom,#b0b0b02e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <HoverTranslateTwo />

          <article className="absolute right-0 bottom-0 left-0 w-full bg-linear-to-t from-white via-white to-transparent p-6 pt-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Actividades
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Contamos con varias actividades destacadas durante el año.
            </p>
          </article>
        </TimelineContent>

        {/* Usage Stats */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-3 sm:col-span-6 col-span-12 border flex flex-col justify-between rounded-lg p-4 relative border-neutral-200"
        >
          <div
            className="absolute inset-0 z-0 rounded-lg"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, #6366f1 100%)",
            }}
          />
          <motion.div
            className="flex -space-x-3"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {[
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
              "https://images.unsplash.com/photo-1617171594279-3aa1f300a0f2?q=80&w=200",
              "https://images.unsplash.com/photo-1659228135452-c4c7b5118047?q=80&w=200",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                width={24}
                height={24}
                className="rounded-xl border-4 border-white h-14 w-14 object-cover"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 2.0 + i * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-semibold sm:pt-0 pt-20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.8, duration: 0.3, type: "spring" }}
            >
              1.5K+
            </motion.h1>
            <p className="text-sm text-gray-700">
              Estudiantes forman parte de nuestros proyectos académicos y de impacto social.
            </p>
          </motion.div>
        </TimelineContent>

        {/* Memberships */}
        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-4 sm:col-span-6 col-span-12 border rounded-lg p-4 group border-neutral-200"
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <h1 className="text-4xl font-semibold">Talleres</h1>
          </motion.div>
          <motion.p
            className="text-sm"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Acompañamos la educación escolar con talleres impulsados por la comunidad educativa.
          </motion.p>
          <div className="space-y-2 mt-6">
            {hungerPrograms.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className={`flex gap-4 justify-between items-start bg-neutral-50 p-3 rounded-xl border border-neutral-200 shadow-lg pl-7 relative before:content-[''] before:absolute before:left-2.5 before:rounded-md before:top-1.5 before:w-1.5 before:h-[80%] ${colorClasses[item.color]} group-hover:rotate-0 transition-all`}
                  style={{
                    rotate: `${item.rotation}deg`,
                    boxShadow: accentShadows[item.color],
                  }}
                  initial={{ x: -30, opacity: 0, rotate: item.rotation + 10 }}
                  animate={{ x: 0, opacity: 1, rotate: item.rotation }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ rotate: 0 }}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white ${accentIconColor[item.color]}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-400" />
                </motion.div>
              );
            })}
          </div>
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-7 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200"
        >
          <article className="w-full bg-linear-to-t font-helvetica from-white via-white to-transparent">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Feria Científica FECIMAR
            </h3>
            <div className="relative w-full h-48 my-4 rounded-lg overflow-hidden">
              <Image
                src="/destacado-evento.JPG"
                alt="Feria Científica FECIMAR"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-gray-800 shadow-md backdrop-blur">
                <Image
                  src="/logo-mcalesti.svg"
                  alt="Escudo del Colegio Mariscal Estigarribia"
                  width={36}
                  height={36}
                  className="h-8 w-auto"
                />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Colegio Mcal. Estigarribia
                </span>
              </div>
            </div>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
            La institución es sede del encuentro de alumnos/as e investigadores en diferentes áreas de las ciencias dentro del evento propiciado con la Feria denominada FECIMAR declarado de interés municipal, Departamental y ministerial por el Ministro de Educación Luis Ramírez.
            </p>
          </article>
          <motion.svg
            width="552"
            height="225"
            viewBox="0 0 552 225"
            className="w-fit h-72 pt-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            {[224, 163, 106, 50].map((y, i) => (
              <motion.path
                key={i}
                d={`M0 ${y}H552`}
                stroke="#dbdbdb"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.6 + i * 0.1, duration: 0.8 }}
              />
            ))}

            {[
              {
                d: "M19 2.00001C19 0.895436 19.8954 0 21 0H29C30.1046 0 31 0.895431 31 2V224H19V2.00001Z",
                fill: "#F93861",
              },
              {
                d: "M283 2.00001C283 0.895436 283.895 0 285 0H292C293.105 0 294 0.895431 294 2V224H283V2.00001Z",
                fill: "#008AFF",
              },
              {
                d: "M46 93C46 91.8954 46.8954 91 48 91H55C56.1046 91 57 91.8954 57 93V224H46V93Z",
                fill: "#FFCA00",
              },
              {
                d: "M309 93C309 91.8954 309.895 91 311 91H319C320.105 91 321 91.8954 321 93V224H309V93Z",
                fill: "#B8A6DC",
              },
              {
                d: "M72 25C72 23.8954 72.8954 23 74 23H82C83.1046 23 84 23.8954 84 25V224H72V25Z",
                fill: "#25A87C",
              },
              {
                d: "M336 25C336 23.8954 336.895 23 338 23H345C346.105 23 347 23.8954 347 25V224H336V25Z",
                fill: "#F93861",
              },
              {
                d: "M98 132C98 130.895 98.8954 130 100 130H108C109.105 130 110 130.895 110 132V224H98V132Z",
                fill: "#B8A6DC",
              },
              {
                d: "M362 132C362 130.895 362.895 130 364 130H371C372.105 130 373 130.895 373 132V224H362V132Z",
                fill: "#25A87C",
              },
              {
                d: "M125 203C125 201.895 125.895 201 127 201H134C135.105 201 136 201.895 136 203V224H125V203Z",
                fill: "#4EEAEF",
              },
              {
                d: "M388 203C388 201.895 388.895 201 390 201H398C399.105 201 400 201.895 400 203V224H388V203Z",
                fill: "#4EEAEF",
              },
              {
                d: "M151 9C151 7.89543 151.895 7 153 7H161C162.105 7 163 7.89543 163 9V224H151V9Z",
                fill: "#8E5AF5",
              },
              {
                d: "M415 9C415 7.89543 415.895 7 417 7H424C425.105 7 426 7.89543 426 9V224H415V9Z",
                fill: "#8E5AF5",
              },
              {
                d: "M178 165C178 163.895 178.895 163 180 163H187C188.105 163 189 163.895 189 165V224H178V165Z",
                fill: "#E33E58",
              },
              {
                d: "M441 165C441 163.895 441.895 163 443 163H451C452.105 163 453 163.895 453 165V224H441V165Z",
                fill: "#E33E58",
              },
              {
                d: "M204 55C204 53.8954 204.895 53 206 53H213C214.105 53 215 53.8954 215 55V224H204V55Z",
                fill: "#008AFF",
              },
              {
                d: "M467 55C467 53.8954 467.895 53 469 53H477C478.105 53 479 53.8954 479 55V224H467V55Z",
                fill: "#008AFF",
              },
              {
                d: "M230 84C230 82.8954 230.895 82 232 82H240C241.105 82 242 82.8954 242 84V224H230V84Z",
                fill: "#46D394",
              },
              {
                d: "M494 84C494 82.8954 494.895 82 496 82H503C504.105 82 505 82.8954 505 84V224H494V84Z",
                fill: "#46D394",
              },
              {
                d: "M257 42C257 40.8954 257.895 40 259 40H266C267.105 40 268 40.8954 268 42V224H257V42Z",
                fill: "#FFCA00",
              },
              {
                d: "M520 42C520 40.8954 520.895 40 522 40H530C531.105 40 532 40.8954 532 42V224H520V42Z",
                fill: "#FFCA00",
              },
            ].map((bar, i) => (
              <motion.path
                key={i}
                d={bar.d}
                fill={bar.fill}
                variants={barVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              />
            ))}
          </motion.svg>
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={4}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200"
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <article className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                MEC
              </span>
              <h3 className="text-2xl font-semibold text-gray-900">
                Programa Hambre Cero
              </h3>
              <p className="text-sm text-gray-600">
                Gracias al apoyo del gobierno se garantiza la provisión de alimentos para los alumnos durante los tres turnos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" strokeWidth={2.2} />
                  <span>Salud y nutrición para estudiantes de todos los turnos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" strokeWidth={2.2} />
                  <span>Educación nutricional: Se promueve la alimentación nutritiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" strokeWidth={2.2} />
                  <span>Se distribuyen los alimentos para todos los estudiantes</span>
                </li>
              </ul>
            </article>
            <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-inner">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/hambre-cero-logo.png"
                  alt="Programa Hambre Cero en el Colegio Mariscal Estigarribia"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </TimelineContent>
      </div>
    </section>
  );
};

const DestacadoPage = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Navbar10 />
    <main className="flex-1">
      <Feature1 />
    </main>
    <FooterSimple />
  </div>
);

export default DestacadoPage;
