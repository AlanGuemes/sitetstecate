import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MobileNav } from '@/components/mobile-nav'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portal de Transparencia Municipal',
  description: 'Portal de Transparencia - Acceso a información pública, obligaciones de transparencia y documentos oficiales',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/res/escudo_tecate_white.png' },
    ],
    apple: '/res/escudo_tecate_white.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <MobileNav />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
