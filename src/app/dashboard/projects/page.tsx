'use client'
// import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import { ProjectDataProvider } from "@/context/projectContext";
import ProjectForm from '@/components/reforestation-project/ProjectForm';
import { Button } from '@nextui-org/react';
import ProjectsTable from '@/components/reforestation-project/ProjectsTable';
import Link from 'next/link';
import Head from 'next/head';


const DynamicMap = dynamic(() => import('@/components/MapView'), { ssr: false, loading: () => <p>Cargando mapa...</p> })
function ProjectsPage() {
    // const router = useRouter()
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Head>
                <title>Proyectos de reforestación</title>
                <meta name="description" content="Pagina donde se puede ver los resultados de los proyectos de reforestación." />
                <meta name="keywords" content="nextjs, reforestación, mapa" />
            </Head>
            <ProjectDataProvider>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4'>
                    <div className=''>
                        <DynamicMap />
                    </div>
                    <div>

                        <Button >
                            <Link href="/dashboard/projects/new">Crear proyecto</Link>
                        </Button>

                        <ProjectsTable />
                    </div>

                </div>
            </ProjectDataProvider>
        </>


    )
}

export default ProjectsPage