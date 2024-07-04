import { makeHttpRequest } from '@/lib/utils'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'luis.cepeda.talentotech@usa.edu.co' },
                password: { label: 'Contraseña', type: 'password' }
            },
            async authorize(credentials, req) {
                try {
                    const userToken = await makeHttpRequest({
                        url: `${process.env.NEXT_PUBLIC_AUTH_API}/login`,
                        method: 'POST',
                        body: { email: credentials!.email, password: credentials!.password }
                    })

                    if (userToken.Status.code === 401) return null

                    cookies().set({
                        name: 'jwt',
                        value: userToken.Data,
                        httpOnly: true,
                        secure: false,
                        path: '/'
                    })

                    const cookieStore = cookies()
                    const jwt = cookieStore.get('jwt')
                    const jwtCookie = `${jwt?.name}=${jwt?.value}`

                    const userResponse = await makeHttpRequest({
                        url: `${process.env.NEXT_PUBLIC_AUTH_API}/user`,
                        method: 'GET',
                        jwtCookie: jwtCookie
                    })
                    const userData: userDataProps = userResponse.Data[0]
                    return userData
                } catch (error) {
                    console.error('Error in authorize:', error)
                    return null
                }
            }
        })
    ],

    pages: {
        signIn: '/login',
    },

    callbacks: {
        async signIn({ user }: SignInProps) {
            if (!user) return false

            const expDate = new Date(user.exp * 1000)
            const currentDate = new Date()
            if (expDate < currentDate) return false

            return true
        },

        async session({ session, token, user }: SessionProps) {
            if (token) {
                session.user = {
                    sub: token.sub,
                    userFirstname: token.userFirstname,
                    userLastname: token.userLastname,
                    userEmail: token.userEmail,
                }
            }
            return session
        },

        async jwt({ token, account, user }) {
            if (user) {
                token.sub = user.sub
                token.userFirstname = user.userFirstname
                token.userLastname = user.userLastname
                token.userEmail = user.userEmail
            }
            return token
        }
    }
}

interface SignInProps {
    user: userDataProps
}
interface SessionProps {
    session: any,
    user: userDataProps,
    token: any
}

interface userDataProps {
    sub: string,
    userFirstname: string,
    userLastname: string,
    userEmail: string,
    iat: Date,
    exp: Date
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
