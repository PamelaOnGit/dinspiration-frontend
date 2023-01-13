// import React from "react"
// import { Link } from "react-router-dom"
// // import { IInspiration } from "./interfaces/inspirations"
// import Inspirations from "./Inspiration"

// export interface IInspiration {
// 	_id: string,
// 	name: string,
// 	recipeURL: string,
// 	description: string,
// 	userImage: string,
// 	userId: string,
// 	primaryFood: string,
// 	secondaryFood: string

// }

// type Inspirations = null | Array<IInspiration>

// function InspirationsList() {
// 	const [inspirations, updateInspirations] = React.useState<Inspirations>(null)

// 	React.useEffect(() => {
// 		console.log("The Inspirations List Page has Mounted")
// 	}, [])

// 	React.useEffect(() => {
// 		async function fetchInspirations() {
// 			const resp = await fetch("/api/inspirations")
// 			const data = await resp.json()
// 			updateInspirations(data)
// 			console.log(data)
// 		}

// 		fetchInspirations()
// 	}, [])

// 	return (
// 		<>
// 			<div className="column is-one-quarter-desktop is-one-third-tablet">

// 				<Link to="/inspirations">
// 					<div className="card">
// 						<div className="card-header">
							
// 						</div>
// 						<div className="recipe-link">
// 							{/* <figure className="image image-is-1by1"> */}
							
// 							{/* </figure> */}
// 						</div>
// 						<div className="card-image">
// 							<figure className="image image-is-1by1">
								
// 							</figure>
// 						</div>
// 					</div>
// 				</Link>
// 			</div>
// 			{/* <section className="section">
// 				<div className="container">
// 					<div className="columns is-multiline">
// 						{Inspirations?.map((inspirations: IInspiration) => {
// 							return <Inspirations
// 								key={inspirations._id}
// 								{...inspirations}
// 							/>
// 						})}
// 					</div>
// 				</div>
// 			</section> */}

// <section className="section">
// 		<div className="container">
// 		{/* <Link to="/inspirations"></Link> */}
// 			<div className="columns is-multiline">
// 			<hr />
// 				{inspirations?.map((inspiration: IInspiration) => {
// 					console.log(Response)
// 					return <Inspirations
// 						key={inspiration.name}
// 						{...inspiration}
// 					/>
// 				})}
// 			</div>
// 		</div>
// 	</section>

// 		</>
// 	)


	
// 	// return <section className="section">
// 	// 	<div className="container">
// 	// 	{/* <Link to="/inspirations"></Link> */}
// 	// 		<div className="columns is-multiline">
// 	// 		<hr />
// 	// 			{inspirations?.map((inspiration: IInspiration) => {
// 	// 				console.log(Response)
// 	// 				return <Inspirations
// 	// 					key={inspiration.name}
// 	// 					{...inspiration}
// 	// 				/>
// 	// 			})}
// 	// 		</div>
// 	// 	</div>
// 	// </section>

// }
// export default InspirationsList