import { Link } from 'react-router-dom'
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
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
    text-align: center;
    justify-content: center;
    padding-bottom: 2rem;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  color: rgb(158, 158, 158);
  font-weight: 700;

  &:hover {
    color: rgb(255, 152, 0);
  }
`
export const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: white;
  box-shadow: 0 0 0 0;
  outline: 0;
`
