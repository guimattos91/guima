import styled from 'styled-components'

interface ILinkAProps {
  linkcolor: string
  linkhovercolor: string
}

interface IHeaderProps {
  bgcolor: string
}

export const HeaderDiv = styled.header<IHeaderProps>`
  background-color: ${(props) => props.bgcolor};
`
export const ImgStyled = styled.img`
  max-height: 50px;
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`
export const ImgStyledSmall = styled.img`
  max-height: 50px;
  display: none;

  @media (max-width: 767px) {
    display: flex;
  }
`
export const H1Styled = styled.h1`
  display: flex;
  margin: 0;
`
export const SectionStyled = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;

  @media (max-width: 767px) {
    display: none;
    text-align: center;
    justify-content: center;
    padding-bottom: 2rem;
  }
`
export const MenuMobile = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: #041114;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  transition: height 2s ease;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    a {
      padding: 1rem 0;
      color: white;
    }
  }
`
export const SectionStyledSmall = styled.section`
  display: none;
  justify-content: flex-end;
  align-items: center;
  color: white;

  @media (max-width: 767px) {
    display: flex;
    text-align: center;
    justify-content: flex-end;
    align-items: center;
  }
`
export const NavStyled = styled.nav`
  display: flex;
  justify-content: flex-end;
  color: white;
  align-items: center;
`
export const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: white;
  box-shadow: 0 0 0 0;
  outline: 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const AStyled = styled.a<ILinkAProps>`
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.linkcolor};
  &:hover {
    color: ${(props) => props.linkhovercolor};
    padding-bottom: 5px;
    border-bottom: 4px solid;
    transition: 0.4s;
  }
`
