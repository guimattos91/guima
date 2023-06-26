import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'services/i18n'

import { ThemeProvider } from 'context/ThemeContext'

// import GlobalStyle from 'styles/GlobalStyle'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ThemeProvider>
        {/* <GlobalStyle /> */}
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
)
