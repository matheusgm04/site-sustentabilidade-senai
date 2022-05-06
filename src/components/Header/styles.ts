import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderSpace = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.pallete?.primary?.main};
`

export const HeaderContent = styled.div`
  display: flex;
  padding: 2.5rem 0;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const Navbar = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 2.5rem;
    justify-content: center;
  }
`

export const Navlink = styled.div`
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 1.563rem;
    transition: all 0.2s ease-out;

    &:after {
      content: '';
      display: block;
      height: 2px;
      width: 0%;
      transition: all 0.2s ease-out;
      background-color: ${(props) => props.theme.pallete?.primary?.main};
    }

    &:hover {
      color: ${(props) => props.theme.pallete?.primary?.main};

      &:after {
        width: 100%;
      }
    }

    @media screen and (max-width: 1150px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1000px) {
    margin-right: 3rem;
  }

  @media screen and (max-width: 650px) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 650px) {
    margin-right: 1rem;
  }
`
