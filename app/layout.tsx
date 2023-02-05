import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './style.css'
import './utility.css'
import './globals.css'
import NavbarTwo from '@/components/NavbarTwo'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    
      <body>
        <NavbarTwo/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
