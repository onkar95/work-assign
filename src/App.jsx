import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter } from "react-router";
import { ThemeProvider, useThemeContext } from "./context/themeContext";

function App() {
  const {currentTheme} = useThemeContext()
  return (
    <BrowserRouter>
      <div className={`min-h-screen ${currentTheme} `}>
        <UserProvider>
          <Navbar />
          <Dashboard />
        </UserProvider>
      </div>
    </BrowserRouter>
  )
}

export default App




