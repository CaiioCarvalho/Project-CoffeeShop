import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap');

    }

    *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    input, button, textarea, body{
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

`