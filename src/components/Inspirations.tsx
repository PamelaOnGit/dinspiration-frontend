// import { Link } from "react-router-dom"
// import { IInspiration } from "../interfaces/inspirations"


// function Inspirations({ name, recipeURL, description, userImage, userId, primaryFood }: IInspiration) {
//   return <div className="column is-one-quarter-desktop is-one-third-tablet">
//     <Link to={`/inspirations/${name}`}>
//       <div className="card">
//         <div className="card-header">
//           <div className="card-header-title">{description}</div>
//         </div>
// 				<div className="recipe-link">
//           {/* <figure className="image image-is-1by1"> */}
//             <img src={recipeURL} alt={name} />
//           {/* </figure> */}
//         </div>
//         <div className="card-image">
//           <figure className="image image-is-1by1">
//             <img src={userImage} alt={name} />
//           </figure>
//         </div>
//       </div>
//     </Link>
//   </div>
// }

// export default Inspirations

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

function Inspiration({ _id, name, recipeURL, description, userImage, primaryFood }: IInspiration) {
	console.log(Inspiration)

	return <div className="column is-one-quarter-desktop is-one-third-tablet">
	<Link to={`/inspirations/${_id}`}>
		<div className="card">
			<div className="card-header">
				<div className="card-header-title">{description}</div>
			</div>
			<div className="recipe-link">
				{/* <figure className="image image-is-1by1"> */}
					<img src={recipeURL} alt={name} />
				{/* </figure> */}
			</div>
			<div className="card-image">
				<figure className="image image-is-1by1">
					<img src={userImage} alt={name} />
				</figure>
			</div>
		</div>
	</Link>
</div>
}
export default Inspiration

// 	return (
// 		<>
// 		<Link to={`/inspiration/${name}`} >
// 		<div className="container is-max-desktop">
//   <div className="container-wrap is-full height">
    

		
// 			<div className="inspiration-pack">
// 			<span className="card-name is-black is-size-5">Name {name}</span>
// 			<span className="card-symbol is-size-5 is-black">Symbol {symbol}</span>
// 			<span className="card-mkc-usd is-size-5">Market Cap USD {market_cap_usd}</span>
// 			<span className="card-price-usd is-size-5">Price USD {price_usd}</span>
// 			<span className="card-price-btc is-size-5">Price BTC {price_btc}</span>
// 			<span className="card-percent-change is-size-5">%Change 24h {percent_change_24h < 0 ? 'text-red-400' : 'text-green-400'}</span>
// 			{/* {coin.percent_change_24h < 0 <TrendingDown /> : <TrendingUp />} */}
// 			{percent_change_24h}
// 			</div>
// 			</div>
// </div>	
// 			<hr/>
// 		</Link>
// 		</>	
// 	)


	
