import React from "react"
import { IFood } from "../interfaces/food"
import Food from "./Food"
import axios from "axios"
type Foods = null | Array<IFood>

function MyFoods() { 
  const [Foods, updateFoods ] = React.useState<Foods>(null)
  console.log(Foods)

  React.useEffect(() => { 
    console.log("The Foods Page has mounted")
  }, [])

  React.useEffect(() => { 
    async function fetchFoods() { 
      const resp = await fetch("/api/foods")
      const FoodsData = await resp.json() 
      updateFoods(FoodsData)
    }
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

export default MyFoods