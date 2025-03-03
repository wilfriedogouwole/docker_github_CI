import { Metadata } from "next"
import Link from "next/link"
import { RegisterForm } from "@/components/auth/register-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Inscription",
  description: "Créez un nouveau compte",
}

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center"
      >
        <Button variant="ghost" className="flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Retour
        </Button>
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-700" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <span className="font-bold text-xl">MonApp</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Rejoignez notre communauté et profitez d&apos;une expérience utilisateur exceptionnelle avec des fonctionnalités avancées et une interface moderne.&rdquo;
            </p>
            <footer className="text-sm">L&apos;équipe MonApp</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}