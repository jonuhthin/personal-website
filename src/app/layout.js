import { Inter } from 'next/font/google'
import './globals.css'
import { RepositoryProvider } from './RepositoryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jonathan's Portfolio",
  description: 'A place to see all my work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RepositoryProvider>{children}</RepositoryProvider>
      </body>
    </html>
  )
}
