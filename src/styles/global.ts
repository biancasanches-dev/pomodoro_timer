import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
	}
`