import { ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  const ContentContainer = styled.div`
    max-width: 1560px;
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem;
  `

  return <ContentContainer>{children}</ContentContainer>
}

export default Container
