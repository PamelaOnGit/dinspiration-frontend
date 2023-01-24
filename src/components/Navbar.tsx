import { Link, useNavigate } from "react-router-dom"
import { IUser } from "../interfaces/user"

interface NavbarProps { 
  user: IUser | null
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) { 

  const navigate = useNavigate() 

  function logout() { 
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }


  return (
    <>
          <header>
        <nav className="navbar is-centered is-success title has-text-centered">
          <div className="container has-text-centered">
            <div className="navbar-brand has-text-centered">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              {!user && <Link to="/signup" className="navbar-item">
                Signup
              </Link>}
              {!user && <Link to="/login" className="navbar-item">
                Login
              </Link>}
              {user && <Link to="/my-foods" className="navbar-item">
                My Foods
              </Link>}
              { user && <button onClick={logout} className="button navbar-item is-ghost">
                Logout
                </button>}
              
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
