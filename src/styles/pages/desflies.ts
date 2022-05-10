import styled from 'styled-components'

export const PageContent = styled.div`
  margin-top: 4rem;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
  flex-wrap: wrap;
  align-items: center;
`

export const ContentList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 400px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    align-items: center;
    margin-bottom: 5rem;
  }
`

export const ListTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  margin-bottom: 3rem;

  @media screen and (max-width: 1000px) {
    width: fit-content;
    justify-content: center;
  }
`

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

export const ListItem = styled.div`
  display: flex;

  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    &:after {
      content: '.';
      display: inline;
      margin-right: 1rem;
    }
  }
`

export const ImagesCarousel = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  height: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-prev {
    &:after {
      color: white;
      filter: drop-shadow(0 0 0.75rem black);
    }
  }

  .swiper-button-next {
    &:after {
      color: white;
      filter: drop-shadow(0 0 0.75rem black);
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 0;
  }
`
