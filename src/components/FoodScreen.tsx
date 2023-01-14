import React from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { IFood } from "../interfaces/food"
import Food from "./Food"
import { IFoodScreen } from "./foodScreenInterface"
import axios from "axios"

type Food = IFood

function FoodScreen(){

  const {id} = useParams()
  console.log(id)

  const [FoodDetails, showFoodDetails ] = React.useState<Food>()
  console.log(FoodDetails)
  const arrayOptions = FoodDetails?.options
  console.log(arrayOptions)

  const [addInspirationButton, goToInspirationForm] = React.useState(false)
  console.log(addInspirationButton)

  // function createInpiration(){
    // const navigate = useNavigate()
    // navigate("//add-inspiration/:foodId")

    // async function handleSubmit(e: SyntheticEvent) {
    //   e.preventDefault()
    //   if (userOptions.length > 1) {
    //   setUserOptions(
    //     userOptions.filter(a => a !== "anything")
    //   )
    //   }
    //   if (userOptions.length < 1) { 
    //     setUserOptions(["anything"])
    //   }
    //   try { 
    //     const token = localStorage.getItem('token')
    //     const { data } = await axios.patch('/api/my-options', {
    //       "userOptions": userOptions
    //     }, {headers: {"Authorization": `Bearer ${token}`}}  )
    //     navigate('/my-lifestyle')
    //   } catch(err) { 
    //     console.log(err)
    //   }
    // }
  
  
    function handleClick(e: any) {
      e.preventDefault()
      const buttonValue = e.target.value
      console.log(buttonValue)
    }
  
  // console.log("From here, I can go to a link to create a new inspiration")
  // }

  // button broken for now. Jane will fix later


  React.useEffect(() => { 

    async function fetchFoodDetails() { 

  const token = localStorage.getItem('token')
  console.log(token)

      const resp = await axios.get(`/api/food/${id}`, { headers: {"Authorization": `Bearer ${token}` } })
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
      </div>
      <button className="button is-link" onClick={handleClick}>Add an inspiration</button>
  </div>
}

// I'm trying to use one interface that references another interface
// and then can be used to 

// need to add inspiration array demo data to check that it works

export default FoodScreen