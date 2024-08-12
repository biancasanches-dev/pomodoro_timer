import styled from 'styled-components'

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    background: rgba(237, 237, 237, 0.09);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);

    a {
        color: ${({ theme }) => theme.text};
    }
`