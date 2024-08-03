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
        gap: 3rem;
    }
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.5rem;

    input {
      outline: none;
      background-color: ${({ theme }) => theme.secondary};
      font-size: inherit;
      padding: 1rem;
      opacity: 0.8;
      border: none;
      border-radius: 26px;
      color: inherit;

      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      &:focus-within {
        opacity: 1;
      }

      &::placeholder {
        color: inherit;
        font-family: inherit;
        font-weight: 200;
      }
    }
`

export const TimerContainer = styled.div`
    width: 22rem;
    padding: 7rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
    border-radius: 50%;

    span {
        font-size: 5rem;
    }
`