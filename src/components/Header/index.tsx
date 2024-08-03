import { ClipboardList, FolderClock, Timer } from "lucide-react";
import { HeaderStyled, LinkStyled } from "./styles";
import Logo from "../Logo";

export default function Header() {
    return (
        <HeaderStyled>
            <Logo />
            <nav>
                <LinkStyled to="/">
                    <Timer size={24} />
                </LinkStyled>
                <LinkStyled to="/tasks">
                    <ClipboardList size={24} />
                </LinkStyled>
                <LinkStyled to="/history">
                    <FolderClock size={24} />
                </LinkStyled>
            </nav>
        </HeaderStyled>
    )
};