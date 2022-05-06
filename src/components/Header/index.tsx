import Link from 'next/link'
import Container from '../Container'
import Logo from '../Logo'
import * as Styled from './styles'

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSpace />
      <Container>
        <Styled.HeaderContent>
          <Logo />
          <Styled.Navbar>
            <Styled.Navlink>
              <Link href='/'>Início</Link>
            </Styled.Navlink>
            <Styled.Navlink>
              <Link href='/'>Fast Fashion</Link>
            </Styled.Navlink>
            <Styled.Navlink>
              <Link href='/'>Desfiles</Link>
            </Styled.Navlink>
            <Styled.Navlink>
              <Link href='/'>Upcycling na moda</Link>
            </Styled.Navlink>
          </Styled.Navbar>
        </Styled.HeaderContent>
      </Container>
    </Styled.HeaderContainer>
  )
}

export default Header
