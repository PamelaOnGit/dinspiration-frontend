import { Link } from "react-router-dom"

export interface IInspiration {
  _id: string,
  name: string,
  recipeURL: string,
  description: string,
  userImage: string,
  userId: string,
  primaryFood: string,
  secondaryFood: string

}

function Inspiration({ _id, name, recipeURL, description, userImage, userId, primaryFood, secondaryFood }: IInspiration) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">

    <Link to={`/food/${_id}`}>

      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={userImage} alt={name} />
          </figure>
        </div>
        <div>
          <p className="card-content">
            {description}
          </p>
        </div>
        <div>
          <p className="card-content">
            {recipeURL}
          </p>
        </div>
      </div>
    </Link>
  </div>
}

// function InspirationCard({ _id, name, recipeURL, description, userImage, primaryFood }: IInspiration) {
// 	// console.log(Inspiration)

// 	return <div className="column is-one-quarter-desktop is-one-third-tablet">
// 	<Link to={`/inspirations/${_id}`}>
// 		<div className="card">
// 			<div className="card-header">
// 				<div className="card-header-title">{description}</div>
// 			</div>
// 			<div className="recipe-link">
// 				{/* <figure className="image image-is-1by1"> */}
// 					<img src={recipeURL} alt={name} />
// 				{/* </figure> */}
// 			</div>
// 			<div className="card-image">
// 				<figure className="image image-is-1by1">
// 					<img src={userImage} alt={name} />
// 				</figure>
// 			</div>
// 		</div>
// 	</Link>
// </div>
// }
export default Inspiration





