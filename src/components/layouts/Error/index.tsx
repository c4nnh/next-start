import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Header } from '../components/Header'

export const ErrorLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>
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
