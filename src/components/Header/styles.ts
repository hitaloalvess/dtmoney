import styled from 'styled-components';


export const Container = styled.header`
    height: 30vh;
    padding: 3rem 0;
    background-color: var(--blue);
`; 

export const Content = styled.section`
    width: min(100rem, 80%);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        padding: 1rem 2.5rem;
        background-color: var(--blue-light);
        border: none;
        border-radius: 4px;
        color: var(--shape);
        &:hover{
            filter: brightness(0.9);
        }
    }
`;