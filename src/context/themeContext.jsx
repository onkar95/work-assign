import React, { createContext, useState, useEffect, useContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)