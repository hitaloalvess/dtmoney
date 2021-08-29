import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --blue:#5429CC;
        --green:#33CC95;
        --red: #E62E4D;
        --blue-light:#6933FF;

        --text-title:#363F5F;
        --text:#969CB3;

        --background:#F0F2F5;
        --shape:#FFFFFF;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing:antialiased;
        font-size: 1.6rem;
    }

    body, input, button,  textarea{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`