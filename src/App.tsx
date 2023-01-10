import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import FoodsList from "./components/FoodsList"
import Signup from "./components/signup"



function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/foods" element={<FoodsList />}/>
      </Routes>
    </main>
  </Router>
    )
}

export default App
