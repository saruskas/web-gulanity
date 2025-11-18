'use client'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Navbar from './components/Navbar'

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.toString()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: query ? `${pathname}?${query}` : pathname,
      })
    }
  }, [pathname, query])

  return null
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideNavbar =
    pathname === '/' ||
    pathname === '/restaurants' ||
    pathname === '/users' ||
    pathname.startsWith('/blog')

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Suspense fallback={null}>
        <TrackPageView />
      </Suspense>
      {children}
    </>
  )
}
