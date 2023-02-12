import { useSession } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession()

  return (
    <Container>
      <Header />
      <Body>
        {!!session?.user && <Sidebar />}
        <ChildrenContainer>{children}</ChildrenContainer>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  ${tw`h-screen w-screen flex flex-col`}
`

const Body = styled.div`
  ${tw`flex-1 flex`}
`

const ChildrenContainer = styled.div`
  ${tw`flex-1 h-full`}
`
