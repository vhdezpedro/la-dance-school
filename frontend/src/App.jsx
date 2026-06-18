import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-10">LA Dance School</h1>} />
      </Routes>
    </Router>
  )
}

export default App
