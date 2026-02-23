import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DeckPage from './pages/DeckPage'
import SettingsPage from './pages/SettingsPage'
import './App.css'

const isProd = import.meta.env.VITE_IS_PROD === 'true';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deck/:deckId" element={<DeckPage />} />
      {!isProd && <Route path="/settings" element={<SettingsPage />} />}
    </Routes>
  )
}

export default App
