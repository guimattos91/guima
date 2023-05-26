import styled from 'styled-components'

export const HeaderDiv = styled.header`
  background-color: rgb(32, 35, 41);
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 5px;
  color: rgb(158, 158, 158);
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
  padding: 1rem 0;
`
export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  color: white;
  background-color: #1d1d1d;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`
export const SectionStyledSmall = styled.section`
  display: none;
  justify-content: flex-end;
  color: white;

  @media (max-width: 767px) {
    display: flex;
    text-align: center;
    justify-content: flex-end;
  }
`
export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  a {
    text-decoration: none;
  }
`

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: white;
  box-shadow: 0 0 0 0;
  outline: 0;
`
