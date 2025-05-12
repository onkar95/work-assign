import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './styles/globals.css'
import App from './App.jsx'
import { ThemeProvider } from './context/themeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
