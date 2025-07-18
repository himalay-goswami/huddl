import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/Landing"
import LoginPage from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Timeline from "./pages/Timeline"
import CliDocs from './pages/CliDocs'

function App() {

  return (
    <BrowserRouter>
      <div className="root">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/cli-docs" element={<CliDocs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
