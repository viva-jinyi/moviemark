'use client'

import { RecoilProvider } from './RecoilProvider'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from '@/contexts/ThemeContext'

// provider의 관심사 분리

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </RecoilProvider>
  )
}