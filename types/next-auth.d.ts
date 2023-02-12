import { DefaultSession } from 'next-auth'
import { Role } from '../src/types'

type SessionUser = {
  id: string
  role: Role
} & DefaultSession['user']

declare module 'next-auth' {
  interface Session {
    user?: Partial<SessionUser>
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: Partial<SessionUser>
  }
}
