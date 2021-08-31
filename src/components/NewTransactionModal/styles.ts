import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2{
        font-size: 2.4rem;
        color: var(--text-title);
        margin-bottom: 3.2rem;
    }

    input{
        width: 100%;
        height: 6.4rem;
        padding: 0 2.4rem;
        
        border-radius: 4px;
        border: 1px solid var(--boder-input);
        font-size: 1.6rem;
        font-weight: 400;
        
        background-color: var(--background-input);
        &::placeholder{
            color:var(--text);
        }

        & + input{
            margin-top: 1.6rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        height: 6.4rem;
        margin-top: 2.4rem;

        font-size: 1.6rem;
        font-weight: 600;

        border: 0;
        border-radius: 4px;
        
        color: var(--shape);
        background-color: var(--green);

        transition: filter .2s ease-in-out;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1.6rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .8rem;

`;

interface RadioBoxProps{
    isActive:boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green:'#33CC95',
    red: '#E62E4D'
}

//Por padrão um button não possui a prop isActive, portanto dizemos que RadioBox deverá receber uma prop isActive : boolean
export const RadioBox = styled.button<RadioBoxProps>`
        display: flex;
        justify-content: center;
        align-items: center;

        height: 6.4rem;
        border: 1px solid var(--border-input);
        border-radius: 4px;
        background-color: ${ (props) => props.isActive 
                            ?  transparentize(0.9,  colors[props.activeColor])
                            : 'transparent'};

        transition: border-color .2s ease-in-out;

        &:hover{
            border-color: ${ darken(0.1, '#d7d7d7') };
        }

        img{
            width: 2rem;
            height: 2rem;
        }

        span{
            margin-left: 1.6rem;
        }
`