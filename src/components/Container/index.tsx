import { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: ReactNode
}
const ContentContainer = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
`
function Container({ children }: ContainerProps) {
  return <ContentContainer>{children}</ContentContainer>
}

export default Container
