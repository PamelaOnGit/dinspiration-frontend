import React from "react"
import { useParams } from "react-router-dom"
import { IInspiration } from "./InspirationsList"
import Inspiration from "./Inspiration"

function ShowInspiration() {
	const [inspiration, updateInspirations] = React.useState<IInspiration | null>(null)
  // const { inspirationId } = useParams()

	React.useEffect(() => {
console.log(inspirationId)
	}, [])

React.useEffect(() => {
	async function fetchInspirations() {
		const resp = await fetch(`/api/inspirations/${inspirationId}`)
		const InspirationsData = await resp.json()
		updateInspirations(InspirationsData)
	}
}, [])

return <section className="section">
	<div className="container">
		<div className="columns-is-multiline">
			{inspiration && <Inspiration
			key={inspiration._id}
			{...inspiration}
			/>}
		</div>
	</div>
</section>
}
export default ShowInspiration