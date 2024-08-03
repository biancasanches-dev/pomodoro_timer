import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TableContainer = styled.table`

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