import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Timeline from "./pages/Timeline"

function App() {

  return (
    <BrowserRouter>
      <div className="root">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
