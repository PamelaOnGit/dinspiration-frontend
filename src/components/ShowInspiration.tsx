export {}
// import React from "react"
// import { useParams } from "react-router-dom"
// // import { IInspiration } from "./InspirationsList"
// import Inspiration from "./Inspiration"
// import axios from "axios"
// import { baseUrl } from "../config"

// function ShowInspiration() {
// 	const [inspiration, updateInspirations] = React.useState<IInspiration>(null)
//   // const { inspirationId } = useParams()

//   React.useEffect(() => { 
//     console.log("The Inspirsation Page has mounted")

// 	async function fetchInspirations() {
// 		const token = localStorage.getItem('token')
// 		// console.log(token)

// 		const resp = await axios.get(`${baseUrl}/inspirations/`, { headers: {"Authorization": `Bearer ${token}` } })
// 		// const resp = await fetch(`/api/inspirations/${inspirationId}`)
// 		const InspirationsData = await resp.data
// 		updateInspirations(InspirationsData)
// 		console.log(InspirationsData)
// 	}

// 	fetchInspirations()

// }, [])

// return <section className="section">
// 	<div className="container">
// 		<div className="columns-is-multiline">
// 			{inspiration && <Inspiration
// 			key={inspiration._id}
// 			{...inspiration}
// 			/>}
// 		</div>
// 	</div>
// </section>
// }
// export default ShowInspiration