import { Inter } from '@next/font/google'
import LandingPage from './home/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <LandingPage />
    </main>
  )
}
