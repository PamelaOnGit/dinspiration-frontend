import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() { 
  const navigate = useNavigate() 

  const [formData, setFormData] = useState({
    username: "", 
    password: "", 
    passwordConfirmation: "",
    email: "" 
  })

  console.log(formData)

  async function handleSubmit(e: SyntheticEvent) { 
    e.preventDefault()
    console.log(formData)
    try { 
await axios.post('/api/signup', formData)
// navigate('/login')
    }catch(err: any) { 
      console.log(err)
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
      <label className="label">Username</label>
      <div className="control">
        <input
          className="input"
          type="text"
          name={'username'}
          // ! When adding onChange on inputs, good practice
          // ! to also add the value here.
          onChange={handleChange}
          value={formData.username}
        />
      </div>
    </div>
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
    <div className="field">
      <label className="label">Confirm password</label>
      <div className="control">
        <input
          className="input"
          type="password"
          name={'passwordConfirmation'}
          onChange={handleChange}
          value={formData.passwordConfirmation}
        />
      </div>
    </div>
    <button className="button">Submit</button>
  </form>
</div>
</div>
}
