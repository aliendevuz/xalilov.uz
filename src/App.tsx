import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BotYasashXizmati from './pages/BotYasashXizmati'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot-yasash-xizmati" element={<BotYasashXizmati />} />
      </Routes>
    </Router>
  )
}

export default App
