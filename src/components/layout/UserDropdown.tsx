import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from '@nextui-org/react';
import ThemeToggle from './ThemeToggle';
function UserDropdown() {
    return (
        <>
            <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            endContent={<AccountCircleIcon />}
                            radius="sm"
                            variant="light">
                            Usuario
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label='Opciones de usuario'>
                    <DropdownItem key='logout' >
                        <Button variant='light' startContent={<PowerSettingsNewIcon />}>
                            Cerrar sesión
                        </Button>
                    </DropdownItem>
                    <DropdownItem>
                        <ThemeToggle />
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default UserDropdown