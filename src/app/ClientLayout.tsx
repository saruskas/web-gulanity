'use client'
import { usePathname } from 'next/navigation'
import Navbar from './components/Navbar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // Ocultar navbar viejo en home y nuevas rutas
  const hideNavbar = pathname === '/' || pathname === '/restaurants' || pathname === '/users'
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  )
}
