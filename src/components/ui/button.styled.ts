import styled from "styled-components";

interface ButtonProps {
    $variant?: 'primary' | 'alert'
}

export const ButtonStyled = styled.button<ButtonProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 26px;
    background-color: ${({ theme, $variant }) => $variant === 'alert' ?  theme.alert : theme.primary};
    color: #fafafa;
    cursor: pointer;

    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        transition: box-shadow .3s;
        box-shadow: 0 0px 15px #5e45ff90, 0 0px 15px #5e45ff90;
    }
`