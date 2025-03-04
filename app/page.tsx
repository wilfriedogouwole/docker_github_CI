"use client"
import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bienvenue sur notre application cv
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Une application moderne avec authentification et tableau de bord personnalisé.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg">Se connecter</Button>
                  </Link>
                  <Link href="/register">
                    <Button size="lg" variant="outline">S&apos;inscrire</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                  <div className="relative bg-card border rounded-xl shadow-lg p-6 h-full flex items-center justify-center">
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold">Tableau de bord</h3>
                      <p className="text-muted-foreground">
                        Accédez à votre espace personnel pour gérer vos données
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fonctionnalités</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez les fonctionnalités principales de notre application
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 rounded-lg p-4 bg-card shadow"
                >
                  <div className="rounded-full bg-primary/10 p-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 MonApp. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

import { BarChart, Database, ShieldCheck } from "lucide-react"

const features = [
  {
    title: "Authentification sécurisée",
    description: "Système d'authentification robuste avec NextAuth pour protéger vos données",
    icon: ShieldCheck,
  },
  {
    title: "Tableau de bord personnalisé",
    description: "Interface d'administration intuitive et personnalisable selon vos besoins",
    icon: BarChart,
  },
  {
    title: "Base de données flexible",
    description: "Utilisation de Prisma avec SQLite, facilement adaptable à d'autres bases de données",
    icon: Database,
  },
]