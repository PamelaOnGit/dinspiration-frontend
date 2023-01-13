import { Link } from "react-router-dom"
import { IFood } from "../interfaces/food"

function Food({ _id, name, imageURL }: IFood) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">

    <Link to={`/food/${_id}`}>

      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={imageURL} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
}

export default Food