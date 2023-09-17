import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
