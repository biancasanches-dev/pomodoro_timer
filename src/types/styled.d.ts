import 'styled-components'
import { defaultTheme } from '../styles/theme/themes'

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}