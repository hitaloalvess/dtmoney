import styled from "styled-components";

export const Container = styled.section`
    margin-top: 5rem;

    table{
        width: 100%;
        border-spacing: 0 0.8rem;
       
        th{
            padding: 1rem 2.5rem;
            text-align:left;
            line-height: 2.4rem;
            font-weight: 400;
            color: var(--text);
        }

        td{
            padding: 1rem 2.5rem;
            color: var(--text);
            background-color: var(--shape);
            &:first-child{
                color: var(--text-title);
                border-radius: 6px 0 0 6px;
            }

            &:last-child{
                border-radius: 0 6px 6px 0;
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }
        }
    }
`;