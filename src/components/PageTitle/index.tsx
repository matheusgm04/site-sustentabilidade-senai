import { ReactNode } from 'react'
import * as Styled from './styles'

interface PageTitleProps {
  children: ReactNode
}

function PageTitle({ children }: PageTitleProps) {
  return (
    <Styled.TitleContainer>
      <Styled.Title>{children}</Styled.Title>
    </Styled.TitleContainer>
  )
}

export default PageTitle
