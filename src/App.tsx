import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import FoodsList from "./components/FoodsList"
import Signup from "./components/Signup"
import Login from "./components/Login"
import MyOptions from "./components/MyOptions"
import MyLifestyle from "./components/MyLifestyle"
import AddInspiration from "./components/AddInspiration"
import FoodScreen from "./components/FoodScreen"

function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-foods" element={<FoodsList />}/>
        <Route path="/food/:id" element={<FoodScreen />} />
        <Route path="/my-options" element={<MyOptions />}/>
        <Route path="/my-lifestyle" element={<MyLifestyle />}/>
        <Route path="/add-inspiration/:foodId" element={<AddInspiration />}/>
      </Routes>
    </main>
  </Router>
    )
}

export default App

// ! Pam changed '/foods' route to '/my-foods'
