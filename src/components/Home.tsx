import React from "react"


function Home() {
React.useEffect(() => {
console.log("The Home Page Has Mounted!")
})
return (
	<section className="hero is-link is-fullheight-with-navbar is-link">
	<div className="hero-body has-text-centered">
		<div className="container">
			<p className="title">🎬 Inspirations 🍿</p>
		</div>
	</div>
</section>
)
}
export default Home