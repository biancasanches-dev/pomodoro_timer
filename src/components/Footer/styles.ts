import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    a {
        color: ${({ theme }) => theme.text};
    }
`