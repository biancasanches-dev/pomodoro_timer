import styled from "styled-components";

export const ProgressContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;

`
export const StyledProgressCircle = styled.div<{ value: number }>`
    --background: ${({ value }) => `conic-gradient(#664eff ${value}%, #5e45ff90 0)`};

    position: relative;
    inset: 0;
    height: 22rem;
    width: 24rem;
    border-radius: 50%;
    overflow: hidden;
    background: var(--background);
    box-shadow: 0 0px 15px #5e45ff90, 0 0px 15px #5e45ff90;
`;

export const CircleContent = styled.div`
    position: absolute;
    margin: .5rem;
    border-radius: 50%;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    box-shadow: inset 0 0px 15px #5e45ff90;
`