// ThemeContext.js
import { createContext, useEffect,useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { defaultTheme, lightTheme } from './themes';

export const ThemeContext = createContext({
    theme: 'default',
    themeToggler: () => {},
});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('default');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const themeToggler = () => {
        const newTheme = theme === 'default' ? 'light' : 'default';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, themeToggler }}>
            <ThemeProvider theme={theme === 'default' ? defaultTheme : lightTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
