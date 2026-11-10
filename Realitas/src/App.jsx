import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agents from './pages/Agents.jsx'
import Campaigns from './pages/Campaigns.jsx'
import Profile from './pages/Profile.jsx'

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Realitas — página inicial">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span>REALITAS</span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/agentes">Agentes</NavLink>
          <NavLink to="/campanhas">Campanhas</NavLink>
        </nav>

        <NavLink className="profile-link" to="/perfil">
          <span className="profile-avatar" aria-hidden="true">A</span>
          <span>Meu perfil</span>
        </NavLink>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agentes" element={<Agents />} />
          <Route path="/campanhas" element={<Campaigns />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>REALITAS</span>
        <span>O paranormal está mais próximo do que parece.</span>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App