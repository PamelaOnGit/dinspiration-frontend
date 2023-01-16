import React from "react"
import { useParams, Navigate, useNavigate, Routes, Router } from "react-router-dom"
import { IFood } from "../interfaces/food"
import Food from "./Food"
import { IFoodScreen } from "./foodScreenInterface"
import axios from "axios"
import Inspiration from "./Inspiration"

import { Link } from 'react-router-dom'
import { baseUrl } from "../config"


type Food = IFood


interface IInspiration {
  _id: string,
  name: string,
	recipeURL: string,
  description: string,
  userImage: string,
	userId: string,
	primaryFood: string, 
  secondaryFood: string
  }


type Inspirations = null | Array<IInspiration>

//

function FoodScreen(){


  const  { id } = useParams()
  console.log(id)

  const [FoodDetails, showFoodDetails ] = React.useState<Food>()

  const [inspirations, setInspirations] = React.useState<Array<Inspirations> | null>(null)
  console.log(inspirations)
  
  React.useEffect(() => { 

    async function fetchInspirations() { 

  //! In case helpful - this is the code we can use in order to make a get request 
  //! WITH THE AUTH TOKEN ATTACHED 
  //! which will allow us to filter foods according to the user
  const token = localStorage.getItem('token')
  console.log(token)

      const resp = await axios.get(`${baseUrl}/inspirations`, { headers: {"Authorization": `Bearer ${token}` } })
      const inspirationsData = await resp.data
      setInspirations(inspirationsData)
      
    }
//!


    fetchInspirations()
  }, [])



  


  React.useEffect(() => { 

    async function fetchFoodDetails() { 

  const token = localStorage.getItem('token')
  console.log(token)

      const resp = await axios.get(`${baseUrl}/food/${id}`, { headers: {"Authorization": `Bearer ${token}` } })
      const FoodsData = await resp.data
      showFoodDetails(FoodsData)
    }

fetchFoodDetails()
  }, [])



  return <div className="column is-one-third-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image image-is-4by3">
            <img src={FoodDetails?.imageURL} alt={`Here is an image of ${FoodDetails?.name}`}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content"></div>
            <p className="title is-4">{FoodDetails?.name}</p>
            <p className="subtitle is-6">{FoodDetails?.options}</p>
              {FoodDetails?.lifestyle.highProtein && <p className="subtitle is-6">{"High protein"}</p>}
              {FoodDetails?.lifestyle.keto && <p className="subtitle is-6">{"Keto"}</p>}
              {FoodDetails?.lifestyle.lowCalorie && <p className="subtitle is-6">{"Low calorie"}</p>}
              {FoodDetails?.lifestyle.lowCarb && <p className="subtitle is-6">{"Low carb"}</p>}
              {FoodDetails?.lifestyle.lowGi && <p className="subtitle is-6">{"Low GI"}</p>}
        </div>
        <Link to={`/add-inspiration/${id}`}><button className="button is-link">Add an inspiration</button></Link>
      </div>
      
      <div className="columns is-multiline">
        {inspirations?.map((food: any) => {
          return <Inspiration 
            key={food._id}
            {...food}
          />
        })}
      </div>


  </div>
}

// I'm trying to use one interface that references another interface
// and then can be used to 

// need to add inspiration array demo data to check that it works

export default FoodScreen