"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, FileText, BarChart3, Activity } from "lucide-react"

const stats = [
  {
    title: "Utilisateurs",
    value: "12",
    icon: Users,
    description: "Utilisateurs actifs",
    change: "+2.5%",
    changeType: "positive",
  },
  {
    title: "Documents",
    value: "45",
    icon: FileText,
    description: "Documents créés",
    change: "+12.2%",
    changeType: "positive",
  },
  {
    title: "Revenus",
    value: "€2,450",
    icon: BarChart3,
    description: "Ce mois-ci",
    change: "-3.1%",
    changeType: "negative",
  },
  {
    title: "Activité",
    value: "24",
    icon: Activity,
    description: "Actions aujourd'hui",
    change: "+5.7%",
    changeType: "positive",
  },
]

export function DashboardStats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
                {stat.change && (
                  <span
                    className={
                      stat.changeType === "positive"
                        ? "text-green-500 ml-1"
                        : "text-red-500 ml-1"
                    }
                  >
                    {stat.change}
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}