// import React from "react"
// import { Link } from "react-router-dom"
// import { IInspiration } from "./interfaces/inspirations"
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
// 			<section className="section">
// 				<div className="container">
// 					<div className="columns is-multiline">
// 						{inspirations?.map((inspiration: IInspiration) => {
// 							return <Inspirations
// 								key={inspiration.name}
// 								{...inspiration}
// 							/>
// 						})}
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)


// }

// export default InspirationsList