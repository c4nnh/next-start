import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <Container>
      <span>Hello: {session?.user?.name}</span>
      <Link href="/">Home</Link>
      {session?.user ? (
        <button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: '/api/auth/signin?callbackUrl=http://localhost:3000',
            })
          }
        >
          Signout
        </button>
      ) : (
        <button onClick={() => signIn()}>Signin</button>
      )}
    </Container>
  )
}

const Container = styled.div`
  ${tw`bg-red-200 h-10 flex justify-between box-border px-5 py-2`}
`
