import styled, { createGlobalStyle } from 'styled-components'

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
        background-color: ${({ theme }) => theme.background.color};
        font-family: 'Montserrat', sans-serif;
    }
    a, a:hover { color: inherit; };

    p{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colorText.mainText};
    }
`

export const AStyled = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.colorText.mainText};
`
