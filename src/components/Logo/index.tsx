import logoImg from "./../../../public/icon.svg"
import { LogoStyled } from "./styles"

export default function Logo() {
    return(
        <LogoStyled>
            <img src={logoImg} alt="" />
            <span>Pomodoro</span>
        </LogoStyled>
    )
};