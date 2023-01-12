import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
	<h1>Hello Project 3!</h1>
	
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/movie/:movieId" element={<ShowMovie />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
