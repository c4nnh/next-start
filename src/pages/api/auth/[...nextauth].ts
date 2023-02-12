import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Role } from '../../../types'

export default NextAuth({
  callbacks: {
    session: async ({ session, token }) => {
      session.user = token.user
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
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = {
          id: '1323',
          name: 'J Smith',
          email: 'jsmith@example.com',
          role: Role.ADMIN,
        }
        return user
      },
    }),
  ],
  // pages: {
  //   signIn: "/auth/login",
  // },
})
