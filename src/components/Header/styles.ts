import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderStyled = styled.header`
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    background: rgba(237, 237, 237, 0.09);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 0;
        width: 80%;
        margin: auto;
    }

    nav {
        display: flex;
        gap: 1rem;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        transition: color 0.5s;

        :hover {
            color: ${({ theme }) => theme.primary};
            filter: drop-shadow(#664eff 0 0 .7rem);
            -webkit-filter: drop-shadow(#664eff 0 0 .7rem);
        }
    }

    @media (max-width: 768px) {
        div {
            width: 90%;
        }
    }  
`

export const LinkStyled = styled(Link)`
    color: ${({ theme }) => theme.text};

    :hover {
        color: ${({ theme }) => theme.primary};
        filter: drop-shadow(#664eff 0 0 .7rem);
        -webkit-filter: drop-shadow(#664eff 0 0 .7rem);
    }
`