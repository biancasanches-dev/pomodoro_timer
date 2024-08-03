import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 26px;
    background-color: ${({ theme }) => theme.primary};
    color: inherit;
    cursor: pointer;

    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        scale: 1.1;
    }


`