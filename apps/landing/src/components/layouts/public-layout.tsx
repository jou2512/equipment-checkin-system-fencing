"use client"

import type React from "react"
import { LandingNavBar } from "@/components/landing-nav"

interface PublicLayoutProps {
  children: React.ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <LandingNavBar />
      </header>
      <main className="flex-1 pt-16">{children}</main>
    </div>
  )
}
