import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "../components/global-loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Across The Valley",
  description: "A love thriller movie set in Benue state",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  )
}
