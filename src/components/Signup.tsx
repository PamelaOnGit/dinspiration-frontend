import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// ! SIGNUP
// navbar 
// route
// we need to send / post to our API
// store form data as an object with keys and values
// starting off with empty strings
// event handlers to change our state
// - one on the form itself - onSubmit
// - on each input - onChange - the same function for every field

export default function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "", 

  })

  const [errorData, setErrorData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "", 
  })

  console.log("here is the errorData",errorData)

  async function handleSubmit(e: SyntheticEvent) {
    // we need the formData
    // we need to send the data to our API 
    // we need another library for posting the data - axios
    e.preventDefault()
    console.log(formData)
    try {
      await axios.post('/api/signup', formData)
      navigate('/my-options')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrorData({
      ...errorData,
      [e.target.name]: ""
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
            {errorData.username && <small className="has-text-danger">{errorData.username}</small>}
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
            {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
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
            {errorData.password && <small className="has-text-danger">{errorData.password}</small>}
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
             {errorData.passwordConfirmation && <small className="has-text-danger">{errorData.passwordConfirmation}</small>}
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}
