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
      <Link to="/" className='logo'>BlogVista</Link>
      <nav>
        {user && user.name ? <>
          <Link to='/createpost'>Create Post</Link>
          <button onClick={logout}>Logout</button>
        </>
        : 
        <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </>
        }
      </nav>
    </header>
  );
};

//2:42:03