import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import FoodsList from "./components/MyFoods"
import Signup from "./components/Signup"
import Login from "./components/Login"
import InspirationsList from "./components/InspirationsList"
import MyFoods from "./components/MyFoods"
import ShowInspiration from "./components/ShowInspiration"



function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-foods" element={<MyFoods />}/>
				<Route path="/inspirationslist" element={<InspirationsList />} />
        <Route path="/showinspiration" element={<ShowInspiration />} />
      </Routes>
    </main>
  </Router>
    )
}


export default App
