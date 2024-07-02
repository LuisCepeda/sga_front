import React from 'react'
import CardSkeleton from './CardSkeleton'

function CardGroupSkeleton() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <CardSkeleton className='mx-auto flex flex-col items-center justify-center ' />
                <CardSkeleton className='mx-auto flex flex-col items-center justify-center ' />
                <CardSkeleton className='mx-auto flex flex-col items-center justify-center ' />
                <CardSkeleton className='mx-auto flex flex-col items-center justify-center ' />
            </div>
        </>
    )
}

export default CardGroupSkeleton