import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../server/db/client'

export default NextAuth({
  callbacks: {
    session: async ({ session, token }) => {
      if (token.user) {
        session.user = token.user
      }
      return session
    },
    jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: 'sm',
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const data = await prisma.user.findFirst({
          where: {
            email: 'abcd',
            password: 'abcd',
          },
        })

        return data
      },
    }),
  ],
  // pages: {
  //   signIn: "/auth/login",
  // },
})
