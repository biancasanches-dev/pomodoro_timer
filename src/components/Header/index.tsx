import { ClipboardList, FolderClock, Timer } from "lucide-react";
import { HeaderStyled, LinkStyled } from "./styles";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderStyled>
            <Link to={"/"}>
                <Logo />
            </Link>
            <nav>
                <LinkStyled to="/">
                    <Timer size={24} />
                </LinkStyled>
                {/* <LinkStyled to="/tasks">
                    <ClipboardList size={24} />
                </LinkStyled> */}
                <LinkStyled to="/history">
                    <FolderClock size={24} />
                </LinkStyled>
            </nav>
        </HeaderStyled>
    )
};