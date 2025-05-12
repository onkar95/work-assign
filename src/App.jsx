import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter } from "react-router";
import { ThemeProvider, useThemeContext } from "./context/themeContext";
import './index.css'
// import './styles/globals.css'

function App() {
  const { theme } = useThemeContext()
  return (
    <div className="overflow-auto hide-scrollbar">

      <BrowserRouter>
        <div className={`min-h-screen overflow-auto hide-scrollbar bg-navbarBg text-primaryText ${theme}  `} >
          <UserProvider>
            <Navbar />
            <Dashboard />
          </UserProvider>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App




