
import ProjectForm from '@/components/reforestation-project/ProjectForm';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Crear proyecto',
};
function NewProjectPage() {
  return (
    <>
      <section className='flex flex-col items-center justify-center'>
        <ProjectForm />
      </section>
    </>
  )
}

export default NewProjectPage