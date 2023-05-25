import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

interface ILinkProps {
  linkcolor: string
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
    }
    body {
        background-color: #1d1d1d;
        font-family: 'Montserrat', sans-serif;
    }
    a, a:hover { color: inherit; };

    p{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }
`
export const TextWhite = styled.p`
  padding: 0;
  margin: 0;
  color: white;
`
export const TextLightBlue = styled.p`
  padding: 0;
  margin: 0;
  color: #02acd9;
`
export const TextBlack = styled.p`
  padding: 0;
  margin: 0;
  color: #1d1d1d;
`

export const LinkStyled = styled(Link)<ILinkProps>`
  text-decoration: none;
  font-style: normal;
  color: ${(props) => props.linkcolor};

  &:hover {
    color: rgb(255, 152, 0);
  }
`
