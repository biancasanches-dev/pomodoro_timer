import { ButtonStyled } from "./styles"

interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    type: "button" | "submit" | "reset" | undefined
}

export default function Button({ children, disabled, type }: ButtonProps) {
    return(
        <ButtonStyled disabled= {disabled} type={type} >{children}</ButtonStyled>
    )
};