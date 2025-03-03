import { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { OverviewChart } from "@/components/admin/overview-chart"
import { RecentActivity } from "@/components/admin/recent-activity"

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Tableau de bord d'administration",
}

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isAdmin />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue sur votre tableau de bord d&apos;administration
          </p>
        </div>
        
        <div className="space-y-8">
          <DashboardStats />
          
          <div className="grid gap-8 md:grid-cols-2">
            <OverviewChart />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}