'use client'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ProvidersProps {
    children: ReactNode
}
export function Providers({ children }: ProvidersProps) {
    return (

        <SessionProvider>
            <NextUIProvider locale='co-CO'>
                <NextThemesProvider attribute='class' defaultTheme='dark'>
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </SessionProvider>
    )
}