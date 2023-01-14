import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../config'


export default function AddInspiration() {
const navigate = useNavigate()


const { id } = useParams()
// const foodId = "63c075d01b4c96f87a5253cc"




  const [formData, setFormData] = useState({
    name: "",
    recipeURL: "",
    description: "",
    userImage: "",
  })



  const [errorData, setErrorData] = useState({
    name: "",
    recipeURL: "",
    description: "",
    userImage: ""
  })


  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    console.log(formData)
    // get the current user from the secureRoute
    // get the food from the useParams 
    // add the token in the header
    try { 
      const token = localStorage.getItem('token')
      console.log(token)
      console.log(formData)
      // console.log(formData.primaryFood)
      const {data} = await axios.post(`${baseUrl}/inspiration/${id}`,
      formData, 
      {headers: {"Authorization": `Bearer ${token}`}})

    } catch(err) { 
      console.log(err)
    }
      }


  function handleChange(e: any) {
    e.preventDefault() 
    console.log('the form has been changed')
    console.log(formData)
      setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value
      })
      setErrorData({
        ...errorData, 
        [e.target.name]:""
      })
  }



  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Give your dish a name...</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder='eg. Spinach and Mango Salad'
              name={'name'}
              // ! When adding onChange on inputs, good practice
              // ! to also add the value here.
              onChange={handleChange}
              value={formData.name}
            />
            {errorData.name && <small className="has-text-danger">{errorData.name}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Provide a url for the recipe...</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder='Optional'
              name={'recipeURL'}
              onChange={handleChange}
              value={formData.recipeURL}
            />
            {errorData.recipeURL && <small className="has-text-danger">{errorData.recipeURL}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Add a text description...</label>
          <div className="control">
            <input
              className="input"
              type="description"
              placeholder="Optional"
              name={'description'}
              onChange={handleChange}
              value={formData.description}
            />
            {errorData.description && <small className="has-text-danger">{errorData.description}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Upload a photo of your creation.. </label>
          <div className="control">
            <input
              className="input"
              type="userImage"
              placeholder='Required'
              name={'userImage'}
              onChange={handleChange}
              value={formData.userImage}
            />
            {errorData.userImage && <small className="has-text-danger">{errorData.userImage}</small>}
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}