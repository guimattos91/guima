import 'styled-components'
import { lightTheme } from 'styles/lightTheme'

declare module 'styled-components' {
  type ThemeType = typeof lightTheme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
