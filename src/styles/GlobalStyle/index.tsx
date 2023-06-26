import { createGlobalStyle } from 'styled-components'

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
        background-color: '#1d1d1d';
        font-family: 'Montserrat', sans-serif;
    }
    a{
        text-decoration: none;
        font-style: normal;
        color: white;
        a:hover { color: inherit; };
    }
    p{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        color: white;
    }
`
