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
        --background-input: #E7E9EE;
        --shape:#FFFFFF;

        --border-input: #d7d7d7;
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

    .react-modal-overlay{
        background-color:rgba(0,0,0, 0.5);
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        justify-content:center;
        align-items:center;
    }

    .react-modal-content{
        position: relative;
        width: min(57.6rem, 90%);
        padding: 4.8rem;
        border-radius: 4px;
        background-color: var(--background);
        
    }

    .react-modal-close{
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;

        border: 0;

        transition: filter .2s ease-in-out;
        background-color: transparent;
        &:hover{
            filter: brightness(0.8);
        }
    }
`