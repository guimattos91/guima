import 'styled-components'
import { Theme } from 'styles/theme'

declare module 'styled-components' {
  type ThemeType = typeof Theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
