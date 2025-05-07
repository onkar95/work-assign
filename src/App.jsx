import { Navbar } from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <UserProvider>
          <Navbar />
          <div className="pt-16">
            <Dashboard />
          </div>
        </UserProvider>

      </div>
    </BrowserRouter>
  )
}

export default App




