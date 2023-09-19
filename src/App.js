import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';


axios.defaults.baseURL='http://localhost:8989';
axios.defaults.withCredentials=true;
function App() {
  return (
    <UserContextProvider>
      <Toaster position='top-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/createpost" element={<CreatePost />}/>
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
