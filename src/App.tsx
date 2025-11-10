import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DeckPage from './pages/DeckPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deck/:deckId" element={<DeckPage />} />
    </Routes>
  )
}

export default App
