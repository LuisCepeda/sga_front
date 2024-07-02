
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


import { Button, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/navigation';

interface UserOptionsMenuProps {
    links: NavigationLink[];
}


function UserOptionsMenu({ links }: UserOptionsMenuProps) {
    const router = useRouter()

    return (
        <>
            <NavbarMenu className='z-50'  >
                {links.map((link) => {

                    return (
                        <NavbarMenuItem key={link.name}>
                            <Button variant='light' onClick={() => router.push(link.href)} startContent={link.iconComponent}>
                                {link.name}
                            </Button>
                        </NavbarMenuItem>
                    )
                })}
                <NavbarMenuItem>
                    <Button variant='light' startContent={<PowerSettingsNewIcon />}>
                        Cerrar sesión
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <ThemeToggle />
                </NavbarMenuItem>
            </NavbarMenu>
        </>
    )
}

export default UserOptionsMenu