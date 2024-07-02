import Link from 'next/link';
import NavLinks from '@/components/layout/NavLinks'
import { Button, Select, SelectItem } from '@nextui-org/react';
import ThemeToggle from './ThemeToggle';
import SettingsIcon from '@mui/icons-material/Settings';

function SideNav() {
    return (
        <>
            <div className='flex h-full flex-col px-3 py-4 md:px-2'>
                <Link href='/' className='mb-2 flex h-20 items-end justify-start rounded-md bg-green-700 p-4 md:h-40'>
                    <div className='w-32 text-white md:w-40'>
                        SGA
                    </div>
                </Link>
                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    <NavLinks />
                    <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />


                    <ThemeToggle />




                </div>
            </div>
        </>
    )
}

export default SideNav
