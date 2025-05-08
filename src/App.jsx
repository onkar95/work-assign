import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/themeContext";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-700">
        <UserProvider>
        <ThemeProvider>
          <Navbar />
          <Dashboard />
        </ThemeProvider>
        </UserProvider>
      </div>
    </BrowserRouter>
  )
}

export default App




