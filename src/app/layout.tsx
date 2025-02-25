import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

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
  title: "Tret.shop",
  description: "Tret.shop"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${integralCFFont.variable} ${satoshiFont.variable}`}>{children}</body>
    </html>
  )
}
