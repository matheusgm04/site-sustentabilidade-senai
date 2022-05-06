import styled from 'styled-components'

export const ImageContainer = styled.div`
  border: thick solid ${(props) => props.theme.pallete?.background?.default};
  outline: thick solid ${(props) => props.theme.pallete?.secondary?.main};
  display: flex;
`
