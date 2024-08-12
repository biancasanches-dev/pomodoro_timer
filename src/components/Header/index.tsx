import { FolderClock, Moon, Sun, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { HeaderStyled, LinkStyled } from './styles'
import Logo from '../Logo'
import { ThemeContext } from '../../styles/theme/themeContext'

export default function Header() {
    const { theme, themeToggler } = useContext(ThemeContext)

    return (
        <HeaderStyled>
            <div>
                <Link to={'/'}>
                    <Logo />
                </Link>
                <nav>
                    <button onClick={themeToggler}>
                        {theme === 'default' ? <Sun size={24} /> : <Moon size={24}/>}
                    </button>
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
            </div>
        </HeaderStyled>
    )
}