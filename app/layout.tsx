import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads Application"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-black min-h-screen ${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}