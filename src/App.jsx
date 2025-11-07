import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
