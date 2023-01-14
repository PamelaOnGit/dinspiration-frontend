import React from "react"
import { IFood } from "../interfaces/food"
import Food from "./Food"
import axios from "axios"

type Foods = null | Array<IFood>

function FoodsList() { 
  const [Foods, updateFoods ] = React.useState<Foods>(null)
  console.log(Foods)

  React.useEffect(() => { 
    console.log("The Foods Page has mounted")
  }, [])

  React.useEffect(() => { 

    async function fetchFoods() { 

  //! In case helpful - this is the code we can use in order to make a get request 
  //! WITH THE AUTH TOKEN ATTACHED 
  //! which will allow us to filter foods according to the user
  const token = localStorage.getItem('token')
  console.log(token)

      const resp = await axios.get("/api/my-foods", { headers: {"Authorization": `Bearer ${token}` } })
      const FoodsData = await resp.data
      updateFoods(FoodsData)
    }
//!


    fetchFoods()
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {Foods?.map((food: IFood) => {
          return <Food 
            key={food._id}
            {...food}
          />
        })}
      </div>
    </div>
  </section>

}

export default FoodsList