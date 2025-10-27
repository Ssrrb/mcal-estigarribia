import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Colegio Nacional Mcal. José Félix Estigarribia | Carapeguá",
    template: "%s | Colegio Nacional Mcal. Estigarribia",
  },
  description:
    "Colegio Nacional de E.M.D. Mcal. José Félix Estigarribia - Institución educativa oficial de Carapeguá con más de 90 años de trayectoria. Ofrecemos educación escolar básica y media con énfasis en ciencias básicas, ciencias sociales, contabilidad, informática, diseño gráfico y asistencia deportiva.",
  keywords: [
    "Colegio Nacional Mcal. Estigarribia",
    "Educación Carapeguá",
    "Colegio Carapeguá",
    "Bachillerato Paraguay",
    "Educación Media Paraguay",
    "FECIMAR",
    "Bachillerato Técnico",
    "Bachillerato Científico",
    "Diseño Gráfico Carapeguá",
    "Informática Carapeguá",
    "Contabilidad Paraguay",
    "Educación Básica",
    "Colegio Oficial Paraguay",
  ],
  authors: [{ name: "Colegio Nacional Mcal. José Félix Estigarribia" }],
  creator: "Colegio Nacional Mcal. José Félix Estigarribia",
  publisher: "Colegio Nacional Mcal. José Félix Estigarribia",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://mcalestigarribiacarapegua.edu.py."),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://mcalestigarribiacarapegua.edu.py",
    siteName: "Colegio Nacional Mcal. José Félix Estigarribia",
    title: "Colegio Nacional Mcal. José Félix Estigarribia | Carapeguá",
    description:
      "Institución educativa oficial con más de 90 años forjando la formación integral de jóvenes en Carapeguá. Ofrecemos educación básica y media con bachilleratos científicos y técnicos en diversas especialidades.",
    images: [
      {
        url: "/logo-mcalesti.svg",
        width: 655,
        height: 567,
        alt: "Logo Colegio Nacional Mcal. José Félix Estigarribia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colegio Nacional Mcal. José Félix Estigarribia | Carapeguá",
    description:
      "Institución educativa oficial con más de 90 años de trayectoria en Carapeguá, Paraguay.",
    images: ["/logo-mcalesti.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-mcalesti.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo-mcalesti.svg", type: "image/svg+xml" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo-mcalesti.svg",
        color: "#4361EE",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
  classification: "Educational Institution",
  other: {
    "contact:email": "colestigarribia@mec.edu.py",
    "contact:address": "Mcal. Estigarribia e/ Martín de Barúa, Carapeguá",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
