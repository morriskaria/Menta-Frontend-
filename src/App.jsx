import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import PatientRegister from './pages/PatientRegister'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<PatientRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
