import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
        box-sizing: border-box;
	}
	body {
		font-family: 'Lexend', sans-serif;
		font-weight: 300;
		background-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
		transition: background-color .4s, color .4s;
	}
`