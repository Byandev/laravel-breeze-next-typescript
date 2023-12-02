'use client'
import { useAuth } from '@/hooks/auth'
import { ReactNode } from 'react'

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth({ middleware: 'auth' })

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">etst</div>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
