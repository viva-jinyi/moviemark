'use client'

import { RecoilProvider } from './RecoilProvider'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </RecoilProvider>
  )
}