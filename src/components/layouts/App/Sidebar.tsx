import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/pokemon">Pokemons</Link>
    </Container>
  )
}

const Container = styled.div`
  ${tw`h-full w-20 flex flex-col bg-green-500`}
`
