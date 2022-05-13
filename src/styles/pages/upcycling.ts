import styled from 'styled-components'

export const PageContent = styled.div`
  margin-top: 4rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: fit-content;
    font-size: 1.5rem;
    display: block;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  div {
    margin-bottom: 2rem;
  }
`

export const BrandTitle = styled.p`
  font-size: 1.875rem;
  width: 100%;
  text-align: center;
  margin-top: 4rem;
`

export const BrandName = styled.p`
  font-size: 1.275rem;
  width: 100%;
  text-align: center;
  margin: 3rem 0;
`
