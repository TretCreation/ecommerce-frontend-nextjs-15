import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tret.shop",
  description: "Tret.shop"
}

export const integralCFRegular = localFont({
  src: "../../public/fonts/IntegralCF-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-integral-regular"
})

export const integralCFBold = localFont({
  src: "../../public/fonts/IntegralCF-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-integral-bold"
})

export const satoshiRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-satoshi-regular"
})

export const satoshiMedium = localFont({
  src: "../../public/fonts/Satoshi-Medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-satoshi-medium"
})

export const satoshiBold = localFont({
  src: "../../public/fonts/Satoshi-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-satoshi-bold"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${integralCFRegular.variable} ${integralCFBold.variable} ${satoshiRegular.variable} ${satoshiBold.variable} ${satoshiMedium.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
