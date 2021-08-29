import styled from "styled-components";

export const Container = styled.div`
    margin-top: -6rem;
    padding: 1.6rem 2.5rem;
    background-color: var(--shape);
    border-radius: 4px;
    color: var(--text-title);

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
       
    }

    strong{
        display: block;
        margin-top: 1.6rem;
        font-size: 3.2rem;
        font-weight: 500;
    }

    &.highlight-background{
        background-color: var(--green);
        color: var(--shape);
    }
`