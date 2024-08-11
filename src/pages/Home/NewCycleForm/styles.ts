import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
      color: #fafafa;

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

    @media (max-width: 768px) {
      width: 90vw;

      input:first-child {
        width: 90vw;

        &::placeholder {
          text-align: center;
        }
      } 
    }
`
