import CardsGroup from '@/components/reforestation-project/CardsGroup'
import CardGroupSkeleton from '@/components/skeletons/CardGroupSkeleton'
import { ProjectDataProvider } from '@/context/projectContext'
import { Suspense } from 'react'

export default async function DashboardPage() {
    return (
        <>
            <main>
                <h1 className='mb-4 text-xl md:text-2xl'>
                    Resumen
                </h1>
                <section>
                    <Suspense fallback={<CardGroupSkeleton />}>
                        <CardsGroup />
                    </Suspense>
                </section>
            </main>
        </>
    )
}