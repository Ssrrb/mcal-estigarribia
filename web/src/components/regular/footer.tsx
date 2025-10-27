"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface FooterSimpleProps {
  logoSrc?: string
  logoAlt?: string
  companyName?: string
  description?: string
  links?: {
    product?: Array<{ name: string; url: string }>
    company?: Array<{ name: string; url: string }>
    support?: Array<{ name: string; url: string }>
  }
  social?: {
    facebook?: string
    instagram?: string
    github?: string
    discord?: string
  }
  copyright?: string
}

export function FooterSimple({
  logoSrc = "/logo-mcalesti.svg",
  logoAlt = "Colegio Nacional Mcal. Estigarribia",
  companyName,
  description,
  links = {
    product: [
      { name: "Nosotros", url: "/nosotros" },
      { name: "Académico", url: "/academico" },
      { name: "Institución", url: "/institucion" },
      { name: "Destacado", url: "/destacado" },
    ],
    company: [
      { name: "Historia", url: "/institucion#historia" },
      { name: "Misión y Visión", url: "/institucion#mision-vision" },
      { name: "Directivos", url: "/nosotros" },
    ],
    support: [
      { name: "Contacto", url: "#" },
      { name: "Email: colestigarribia@mec.edu.py", url: "mailto:colestigarribia@mec.edu.py" },
      { name: "Dirección: Mcal. Estigarribia e/ Martín de Barúa", url: "#" },
    ],
  },
  social = {
    facebook: "https://www.facebook.com/p/Colegio-Nacional-EMD-Mcal-Estigarribia-100057266896916/?locale=es_LA",
    instagram: "https://www.instagram.com/explore/locations/1863384993989835/colegio-nac-emd-mcal-jose-f-estigarribia-carapegua/",
  },
  copyright = `© ${new Date().getFullYear()} Colegio Mcal. Estigarribia. Todos los derechos reservados.`,
}: FooterSimpleProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {logoSrc ? (
                <div className="mb-6">
                  <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ) : (
                <>
                  {companyName && (
                    <h3 className="text-foreground mb-4 text-2xl font-bold">
                      {companyName}
                    </h3>
                  )}
                  {description && (
                    <p className="text-foreground/70 mb-6 max-w-md text-sm">
                      {description}
                    </p>
                  )}
                </>
              )}

              {/* Social Links */}
              <div className="flex gap-4">
                {social.facebook && (
                  <motion.a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-brand transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </motion.a>
                )}
                {social.instagram && (
                  <motion.a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-brand transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.7 2 8.3 2.1 7.1 2.4c-1.2.3-2.2.7-3.2 1.7s-1.4 2-1.7 3.2C2.1 8.3 2 8.7 2 12s.1 3.7 1.7 4.9c.3 1.2.7 2.2 1.7 3.2s2 1.4 3.2 1.7c1.2.3 1.6.4 4.9.4s3.7-.1 4.9-.4c1.2-.3 2.2-.7 3.2-1.7s1.4-2 1.7-3.2c.3-1.2.4-1.6.4-4.9s-.1-3.7-.4-4.9c-.3-1.2-.7-2.2-1.7-3.2s-2-1.4-3.2-1.7C15.7 2.1 15.3 2 12 2zm0 1.8c3.2 0 3.5 0 4.8.1.9.1 1.5.3 2 .5.6.2 1 .6 1.4 1.4.8.8 1.2 1.4 1.4 2 .2.5.4 1.1.5 2 .1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1.9-.3 1.5-.5 2-.2.6-.6 1-1.4 1.4-.8.8-1.4 1.2-2 1.4-.5.2-1.1.4-2 .5-1.3.1-1.6.1-4.8.1s-3.5 0-4.8-.1c-.9-.1-1.5-.3-2-.5-.6-.2-1-.6-1.4-1.4-.8-.8-1.2-1.4-1.4-2-.2-.5-.4-1.1-.5-2-.1-1.3-.1-1.6-.1-4.8s0-3.5.1-4.8c.1-.9.3-1.5.5-2 .2-.6.6-1 1.4-1.4.8-.8 1.4-1.2 2-1.4.5-.2 1.1-.4 2-.5 1.3-.1 1.6-.1 4.8-.1zM12 7.2c-2.7 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8-2.1-4.8-4.8-4.8zm0 8c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm6.3-8.8c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z"/>
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            {links.product && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                  Navegación
                </h4>
                <ul className="space-y-3">
                  {links.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-foreground/70 hover:text-brand transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {links.company && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                  Institución
                </h4>
                <ul className="space-y-3">
                  {links.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-foreground/70 hover:text-brand transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {links.support && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-foreground mb-4 text-sm font-semibold uppercase tracking-wide">
                  Contacto
                </h4>
                <ul className="space-y-3">
                  {links.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-foreground/70 hover:text-brand transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border pt-8 text-center"
        >
          <p className="text-foreground/60 text-sm">
            {copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
