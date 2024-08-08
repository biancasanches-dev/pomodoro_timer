import styled from "styled-components";

export const HistoryContainer = styled.main`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TableContainer = styled.table`
    width: 70%;
    height: 100%;
    margin: 2rem auto;
    border-collapse: collapse;
    border-spacing: 0;
    background: rgba(237, 237, 237, 0.09);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);

    th {
        text-align: left;
        font-size: 1.25rem;
        font-weight: 600;
        padding: 1rem 2rem;
    }

    th:first-child {
        width: 40%;
    }

    td {
        padding: 1rem 2rem;
    }

    tr {
        border-bottom: .2px solid rgba(237, 237, 237, 0.2);
    }

    tr:last-child {
        border-bottom: none;
    }
`

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;

    button {
        background-color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem;
        border: none;
        font-size: 1.25rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color .2s;

        &:hover{
            background-color: ${({ theme }) => theme.primary};
        }

        &:disabled {
            opacity: .5;
            &:hover {
                background-color: gray;
            }
        }

    }
`
interface StatusProps {
    color: "green" | "yellow" | "red";
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: "";
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background-color: ${props => props.color};
    }
`