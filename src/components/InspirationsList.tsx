import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
// import { IInspiration } from "../interfaces/inspirations"
import Inspirations from "./Inspirations"

interface IInspiration {
  _id: string,
  name: string,
	url: string,
  date: string,
  image: string,
  user: { username: string,
	comment: string }
}
type Inspirations = null | Array<IInspiration>

function InspirationsList(inspiration: IInspiration) {
	// const [IInspiration, updateInspirations] = React.useState<Inspirations>(null)
	const [inspirations, setInspirations] = React.useState<Array<Inspirations>>([])
	const [inspirationsList, setInspirationsList] = React.useState<Array<IInspiration>>([])
	const [search, setSearch] = React.useState("")
	console.log(inspirationsList)
	const { inspirationsId } = useParams()
// 	React.useEffect(() => {
// console.log("The Inspirations List Page has Mounted")
// 	})

	React.useEffect(() => {
		async function fetchInspirations() {
			const resp = await fetch("/api/inspirations")
			const inspirations = await resp.json()
			console.log(inspirations)
			setInspirations(inspirations.data)
			setInspirationsList(inspirations)
			console.log("data", inspirations)
		}
		fetchInspirations()
	})

	if (!inspirations) {
		return <div>Inspirations Loading...</div>
	}

	function filterInspirations() {
		return inspirations.filter((inspiration: any) => {
			return inspiration.name.toLowerCase().includes(search.toLowerCase())
		})
	}
}

export default InspirationsList
