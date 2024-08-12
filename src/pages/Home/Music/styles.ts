import styled from 'styled-components'

export const MusicButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    transition: color .2s;

    &:hover {
        color: ${({ theme }) => theme.primary};
        filter: drop-shadow(#664eff 0 0 .7rem);
        -webkit-filter: drop-shadow(#664eff 0 0 .7rem);
    }
`