import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Prestations</Link></li>
          <li><Link to="/booking">Réserver</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Connexion</Link></li>
          <li><Link to="/register">Créer un compte</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
