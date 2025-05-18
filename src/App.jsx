import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter } from "react-router";
import { ThemeProvider, useThemeContext } from "./context/themeContext";
import './index.css'
import './styles/globals.css'
import Report from "./components/Report/Report";

function App() {
  const { currentTheme } = useThemeContext()
  return (
    <div className="overflow-auto hide-scrollbar">

      <BrowserRouter>
        <div className={`min-h-screen  overflow-auto hide-scrollbar  bg-primary-1 text-secondary-3 `} >
          <UserProvider>
            <Navbar />
            <Dashboard />
          </UserProvider>
        </div>
        {/* <Report/> */}
      </BrowserRouter>
    </div>
  )
}

export default App




