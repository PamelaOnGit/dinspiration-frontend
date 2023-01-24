import React from "react"
import { IFood } from "../interfaces/food"
import Food from "./Food"

type IFoods = Array<IFood>

function Home() { 

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link is-success">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title is-1">Nyoodle</p>
          <p className="title is-3">taste something new...   </p>
        </div>
      </div>
    </section>
  )
}

export default Home