import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from '@/Components/Nav'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './Provider'

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <main>
            <Nav></Nav>
            <Toaster />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
