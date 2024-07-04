import LoginForm from '@/components/auth/LoginForm'
import React from 'react'

function LoginPage() {
    return (
        <>
            <section className='flex flex-col items-center justify-center align-middle pt-10 md:pt-20'>

                <LoginForm />
            </section>
        </>
    )
}

export default LoginPage