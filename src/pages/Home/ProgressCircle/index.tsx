import { CircleContent, ProgressContainer, StyledProgressCircle } from "./styles";

interface ProgressCircleProps {
    value: number;
    max: number;
    children: React.ReactNode;
}

export default function ProgressCircle({ value, max, children }: ProgressCircleProps) {
    const percentage = max > 0 ? (value / max) * 100 : 100;

    return(
        <ProgressContainer>
            <StyledProgressCircle value={percentage}>
                <CircleContent>
                    {children}
                </CircleContent>
            </StyledProgressCircle>
        </ProgressContainer>
    )
};