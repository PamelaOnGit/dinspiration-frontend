import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function MyOptions() {
  const navigate = useNavigate()

  const [userOptions, setUserOptions] = useState([""])
  const [buttonClass, setButtonClass] = useState("button is-light")

  console.log(userOptions)


  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    if (userOptions.length > 1) {
    setUserOptions(
      userOptions.filter(a => a !== "anything")
    )
    }
    if (userOptions.length < 1) { 
      setUserOptions(["anything"])
    }
    try { 
      const token = localStorage.getItem('token')
      const { data } = await axios.patch('/api/my-options', {
        "userOptions": userOptions
      }, {headers: {"Authorization": `Bearer ${token}`}}  )
      navigate('/my-lifestyle')
    } catch(err) { 
      console.log(err)
    }
  }


  function handleClick(e: any) {
    e.preventDefault()
    console.log("the form has been changed")

    const buttonValue = e.target.value
    if (!userOptions.includes(buttonValue)) {
      setUserOptions(
        [...userOptions, buttonValue]
      )
      e.target.className = "button is-success"
    } else {
      setUserOptions(
        userOptions.filter(a => a !== buttonValue)
      )
      e.target.className = "button is-light"
    }
  }


  return <div className="section">
    <div className="container">
      <p>What can you eat?</p>
      <p>So we can make sure they're included in your inspirations</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <button value="fruits" onClick={handleClick} className={buttonClass}>Fruits</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="vegetables" onClick={handleClick} className={buttonClass}>Vegetables</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="meat" onClick={handleClick} className={buttonClass}>Meat</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="dairy" onClick={handleClick} className={buttonClass}>Dairy</button>
          </div>
        </div>


        <div className="field">
          <div className="control">
            <button value="eggs" onClick={handleClick} className={buttonClass}>Eggs</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="gluten" onClick={handleClick} className={buttonClass}>Gluten</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="nuts" onClick={handleClick} className={buttonClass}>Nuts</button>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button value="shellfish" onClick={handleClick} className={buttonClass}>Shellfish</button>
          </div>
        </div>


        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}
