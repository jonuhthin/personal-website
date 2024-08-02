import { Fira_Code } from 'next/font/google'
import './globals.css'
import { RepositoryProvider } from './RepositoryProvider'

const font = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: "Jonathan's Portfolio",
  description: 'A place to see all my work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RepositoryProvider>{children}</RepositoryProvider>
      </body>
    </html>
  )
}
