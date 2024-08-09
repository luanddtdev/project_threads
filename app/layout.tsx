import type { Metadata } from "next"
import { Inter as FontInter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

const fontInter = FontInter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads App"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-black font-inter antialiased", fontInter.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}