import { ReactNode } from 'react'
import Container from '../Container'
import * as Styled from './styles'

interface TextContainerProps {
  children: ReactNode
}

function TextContainer({ children }: TextContainerProps) {
  return (
    <Container>
      <Styled.Content>
        <p>{children}</p>
      </Styled.Content>
    </Container>
  )
}

export default TextContainer
