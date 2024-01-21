import axios from "axios";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate=useNavigate()
  const {user,setUser}=useContext(UserContext)

  function logout(){
    axios.post('/logout').then((res)=>{
      setUser(null)
    })
    navigate('/')
  }

  return(
  <header>
      <Link to="/" className='logo'><h3>BlogVista</h3></Link>
      <nav>
        {user && user.name ? <>
          <Link to='/createpost'><h3>Create Post</h3></Link>
          <button onClick={logout}><h3>Logout</h3></button>
        </>
        : 
        <>
          <Link to='/login'><h3>Login</h3></Link>
          <Link to='/register'><h3>Register</h3></Link>
        </>
        }
      </nav>
    </header>
  );
};