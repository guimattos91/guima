import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { isDayTime } from 'helpers'

import { darkTheme } from 'styles/darkTheme'
import { lightTheme } from 'styles/lightTheme'

interface IThemeContextProps {
  toggleTheme: () => void
}

interface IThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps,
)

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(isDayTime() ? lightTheme : darkTheme)
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev.name === 'dark' ? lightTheme : darkTheme))
  }, [])

  useEffect(() => {
    const head = document.querySelector('head')
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'theme-color')
    meta.setAttribute('content', theme.name)
    head?.appendChild(meta)

    return () => {
      head?.removeChild(meta)
    }
  }, [theme.name])

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          toggleTheme,
          theme,
        }),
        [toggleTheme, theme],
      )}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeHook = (): IThemeContextProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
