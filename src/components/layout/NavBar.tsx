'use client'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home';
import ForestIcon from '@mui/icons-material/Forest';
import InfoIcon from '@mui/icons-material/Info';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

import UserDropdown from './UserDropdown';
import UserOptionsMenu from './UserOptionsMenu';



function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const links: NavigationLink[] = [
        { name: 'Home', href: '/dashboard', icon: HomeIcon, iconComponent: <HomeIcon /> },
        { name: 'Proyectos', href: '/dashboard/projects', icon: ForestIcon, iconComponent: <ForestIcon /> },
        { name: 'Acerca de', href: '/dashboard/about', icon: InfoIcon, iconComponent: <InfoIcon /> },
    ]


    const pathname = usePathname()

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll disableAnimation  >

                <NavbarContent justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} className='sm:hidden' />

                    <NavbarBrand>
                        <Link href='/'>
                            <h1 className='font-bold text-inherit'>SGA</h1>
                        </Link>
                    </NavbarBrand>
                </NavbarContent >

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {
                        links.map(link => {
                            const LinkIcon = link.icon
                            return (
                                <NavbarItem key={`nav-item-${link.name}`} >
                                    <Link key={link.name} href={link.href} className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-green-700 md:flex-none md:justify-start md:p-2 md:px-3', { 'bg-sky-100 text-green-700': pathname === link.href })}>
                                        <LinkIcon className="w-6" />
                                        <p className='hidden md:block'>{link.name}</p>
                                    </Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify='end'>
                    <UserDropdown />
                </NavbarContent>

                <UserOptionsMenu links={links} />

            </Navbar>
        </>
    )
}

export default NavBar