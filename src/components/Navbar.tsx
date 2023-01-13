import { Link } from "react-router-dom"

function Navbar() { 
  return (
    <>
          <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/signup" className="navbar-item">
                Signup
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/my-foods" className="navbar-item">
                My Foods
              </Link>
							{/* <Link to="/showinspiration" className="navbar-item">
								Display Inspiration
							</Link>
							<Link to="/inspirationslist" className="navbar-item">
								All Inspirations
							</Link> */}
              {/* We can move this link into the single food display page */}
              <Link to="/add-inspiration/:foodId" className="navbar-item">
              Add Inspiration
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
