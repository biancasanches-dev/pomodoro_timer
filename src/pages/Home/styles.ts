import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        gap: 3rem;
        margin: 3rem 0;
        margin-bottom: 6rem;
    }
`

export const StopButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.alert};
    cursor: pointer;

    &:hover {
      border-bottom: .5px solid ${({ theme }) => theme.alert};
    }
`