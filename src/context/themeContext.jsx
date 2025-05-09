
import React, { createContext, useState, useContext } from "react";
const themeContext = createContext()

export const lightTheme = {
    primary: '#007bff',
    background: '#fff',
    text: '#333',
    fontFamily: 'Roboto, sans-serif',
};

export const darkTheme = {
    primary: '#2196F3',
    background: '#333',
    text: '#fff',
    fontFamily: 'Roboto, sans-serif',
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("lightTheme")
    return (
        <themeContext.Provider value={{
            currentTheme, setCurrentTheme
        }}>
            {children}
        </themeContext.Provider>
    )
}

export const useThemeContext = () => useContext(themeContext)