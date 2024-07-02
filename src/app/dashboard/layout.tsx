import NavBar from '@/components/layout/NavBar'
import SideNav from '@/components/layout/SideNav'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-0">{children}</div>
        </>
    )

}