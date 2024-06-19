'use client'
//import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}
export function Providers({ children }: ProvidersProps) {
    return (

        //<SessionProvider>
        <NextUIProvider locale='co-CO'>
            {children}
        </NextUIProvider>
        //</SessionProvider>
    )
}