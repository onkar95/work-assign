import {Navbar} from "./components/Navbar"
import { UserProvider } from "./context/userContext";
import {Dashboard} from "./components/Dashboard";

function App() {

  return (

    <div className="min-h-screen bg-gray-50">
      <UserProvider>
        <Navbar />
        <div className="pt-16">
          <Dashboard />
        </div>
      </UserProvider>

    </div>
  )
}

export default App




