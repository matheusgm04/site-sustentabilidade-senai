import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 6rem;
`

export const Title = styled.h1`
  font-size: 1.875rem;
  color: black;
  position: absolute;
  background-color: ${(props) => props.theme.pallete?.background?.default};
  padding: 0 3rem;
  transform: translate3d(0, -50%, 0);
`
