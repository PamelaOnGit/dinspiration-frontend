import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { baseUrl } from '../config'


export default function MyLifestyle() {
  const navigate = useNavigate()

  const [userLifestyle, setUserLifestyle] = useState(5)
  const [buttonClass, setButtonClass] = useState("button is-light")

  console.log(userLifestyle)

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    console.log('You submitted!')
    try { 
      const token = localStorage.getItem('token')
      const { data } = await axios.patch(`${baseUrl}/my-lifestyle`, {
        "userLifestyle": userLifestyle
      }, {headers: {"Authorization": `Bearer ${token}`}}  )
      navigate('/my-foods')
    } catch(err) { 
      console.log(err)
    }
  }


  return <div className="section">
    <div className="container">
      <p>What are your nutritional needs?</p>
      <p>Pick one so we can recommend foods to suit your lifestyle and nutritional requirements</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 0
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(0)}>Low GI</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 1
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(1)}>Low-carb</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 2
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(2)}>High protein</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 3
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(3)}>Low calorie</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 4
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(4)}>Keto</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
            type="button"
            className={
              userLifestyle === 5
                ? "button is-success"
                : "button is-light"
            }
              onClick={() => setUserLifestyle(5)}>None</button>
          </div>
        </div>


        <button className="button">Submit</button>
      </form>
    </div>
  </div>


}