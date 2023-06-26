import 'styled-components'
import { lightTheme } from 'styles/lightTheme'

declare module 'styled-components' {
  type ThemeType = typeof lightTheme
  export interface DefaultTheme extends ThemeType {
    name: string
    colorText: {
      black: string
      contrastText: string
      lightBlue: string
      mainText: string
    }
    background: {
      color: string
      lightBlue: string
    }
    font: {
      small: string
      default: string
      big: string
      bigger: string
    }
  }
}
