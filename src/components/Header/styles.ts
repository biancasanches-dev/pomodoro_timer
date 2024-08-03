import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 80%;
    margin: auto;

    nav {
        display: flex;
        gap: 1rem;
    }
`

export const LinkStyled = styled(Link)`
    color: ${({ theme }) => theme.text};

    :hover {
        color: ${({ theme }) => theme.primary};
        scale: 1.1;
    }
`