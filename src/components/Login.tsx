import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { IData } from "../interfaces/data"

export default function Login() { 
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "", 
    password: "", 
  })

  console.log(formData)

async function handleSubmit(e: SyntheticEvent) { 
  e.preventDefault()
  console.log(formData)
  try { 
const { data } = await axios.post('/api/login', formData)
console.log(data)
const token: string = data.token
localStorage.setItem('token', token)
console.log(token)
navigate('/foods')
  } catch(err: any) { 
    console.log(err.response.data)
  }
}

function handleChange(e: any) { 
  setFormData({
    ...formData, 
    [e.target.name]: e.target.value
  })
}

  return <div className="section">
  <div className="container">
    <form onSubmit={handleSubmit}>
      
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={'email'}
            onChange={handleChange}
            value={formData.email}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name={'password'}
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </div>

      <button className="button">Submit</button>
    </form>
  </div>
  </div>
} 