import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import FoodsList from "./components/MyFoods"
import Signup from "./components/Signup"
import Login from "./components/Login"
// import InspirationsList from "./components/InspirationsList"
import MyFoods from "./components/MyFoods"
// import ShowInspiration from "./components/ShowInspiration"
import { IUser } from "./interfaces/user"

import MyOptions from "./components/MyOptions"
import MyLifestyle from "./components/MyLifestyle"
import AddInspiration from "./components/AddInspiration"
import FoodScreen from "./components/FoodScreen"


function App() {

const [user, setUser] = useState<null | IUser>(null)

async function fetchUser() { 
  const token = localStorage.getItem('token')
  const { data } = await axios.get('/api/user', { 
    headers: { Authorization: `Bearer ${token}` }
  })
  setUser(data)
}

useEffect(() => { 
  const token = localStorage.getItem('token')
  if (token) fetchUser()
}, []) 

  return (
    <Router>
    <Navbar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login fetchUser={fetchUser} />} />
        <Route path="/my-foods" element={<MyFoods />}/>
				{/* <Route path="/inspirationslist" element={<InspirationsList />} /> */}
        {/* <Route path="/showinspiration" element={<ShowInspiration />} /> */}
        <Route path="/my-foods" element={<FoodsList />}/>
        <Route path="/food/:id" element={<FoodScreen />} />
        <Route path="/my-options" element={<MyOptions />}/>
        <Route path="/my-lifestyle" element={<MyLifestyle />}/>
        <Route path="/add-inspiration/:id" element={<AddInspiration />}/>
      </Routes>
    </main>
  </Router>
    )
}


export default App

// ! Pam changed '/foods' route to '/my-foods'
