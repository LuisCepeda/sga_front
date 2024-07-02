'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@nextui-org/button'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>

            <Button aria-label='theme-toggle' variant='light' disableAnimation disableRipple onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
                {theme === 'light' ? <>
                    <DarkModeIcon />
                    <p>Modo oscuro</p>
                </> :
                    <>
                        <LightModeIcon />
                        <p>Modo claro</p>
                    </>}
            </Button>

        </>
    )
}
