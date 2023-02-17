import { Poppins as FontSans } from "@next/font/google"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/navigation/site-footer"
import { SiteHeader } from "@/components/navigation/site-header"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-gray-50 font-sans text-gray-900 antialiased dark:bg-[#12011F] dark:text-gray-50",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <div className="container flex-1">{children}</div>
              <SiteFooter />
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
