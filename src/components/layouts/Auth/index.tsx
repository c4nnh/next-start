import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user) {
      router.push('/')
    }
  }, [router, session])

  return <Container>{children}</Container>
}

const Container = styled.div`
  ${tw`bg-red-200`}
`
