'use client'
import { loginSchema } from "@/constants/schemas";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Input } from "@nextui-org/react"

import { useRouter } from "next/navigation"

import { useState } from "react";
import { makeHttpRequest } from "@/lib/utils";

import { useSession } from "next-auth/react";

export default function LoginForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { data: session } = useSession();

    const onSubmit = handleSubmit(async (data) => {

        console.log(data.email)
        try {

            const response = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password
            })
            if (!response?.ok) alert('Error iniciando sesión.')
            router.push('/dashboard')
        } catch (error) {

        }

    })
    return (
        <>
            <form className="grid gap-6" onSubmit={onSubmit}>
                <Card className="max-w-[600px]">
                    <CardHeader className="flex gap-3">
                        <CardTitle>Iniciar sesión</CardTitle>
                        <CardDescription>Rellena los detalles para iniciar sesión.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1  gap-4 pt-3 md:items-end">
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="email"
                                    label="Correo electrónico"
                                    labelPlacement="outside"
                                    placeholder="admin@admin.com"
                                    value={email}
                                    onValueChange={(e) => setEmail(e)}
                                    {...register("email")}
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.email ? "true" : "false"}
                                    isInvalid={errors?.email ? true : false}
                                    errorMessage={errors?.email?.message?.toString()}
                                />
                            </div>
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="password"
                                    label="Contraseña"
                                    labelPlacement="outside"
                                    placeholder="*********"
                                    value={password}
                                    onValueChange={(e) => setPassword(e)}
                                    {...register("password")}
                                    type="password"
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.password ? "true" : "false"}
                                    isInvalid={errors?.password ? true : false}
                                    errorMessage={errors?.password?.message?.toString()}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-row w-full  justify-between">
                            <div>

                                <Button type="button" className="ml-auto" variant="destructive" onClick={() => { router.back() }}>
                                    Volver
                                </Button>
                            </div>
                            <div>

                                <Button type="submit" className="ml-auto">
                                    Iniciar sesión
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>

            </form>
        </>
    )
}