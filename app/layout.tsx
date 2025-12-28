import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DICT Hub - Department of Information and Communications Technology",
  description: "Centralized Hub for HR, Monitoring and Evaluation, Finance, IT, Policy and Information Divisions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
