import styled from "styled-components";

export const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: .6rem;

    img {
        width: 3rem;
    }

    span {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text};
        text-decoration: none;
    }
`