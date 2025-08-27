import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { Header } from "@/widgets/header"
import { TopBanner } from "@/widgets/top-banner"

const integralCFFont = localFont({
  src: [
    { path: "../../public/fonts/IntegralCF-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/IntegralCF-Bold.woff2", weight: "700", style: "normal" }
  ],
  variable: "--font-integralcf"
})

const satoshiFont = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" }
  ],
  variable: "--font-satoshi"
})

export const metadata: Metadata = {
  title: "SHOP.TR | Created by Tretyakov Volodymyr",
  description: "SHOP.TR :3"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${integralCFFont.variable} ${satoshiFont.variable}`}>
      <body>
        <TopBanner />
        <Header />
        {children}
      </body>
    </html>
  )
}
