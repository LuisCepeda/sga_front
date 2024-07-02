
import ProjectForm from '@/components/reforestation-project/ProjectForm';
import { getReforestationProjectById } from '@/lib/actions/project-actions';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Editar proyecto',
}
export default async function EditProjectPage({ params }: { params: { id: string } }) {

    const id = params.id

    const project = await getReforestationProjectById(id)

    if (!project) notFound()
    return (
        <>
            <section className='flex flex-col items-center justify-center'>
                <ProjectForm existingProject={project[0]} />
            </section>
        </>
    )
}
