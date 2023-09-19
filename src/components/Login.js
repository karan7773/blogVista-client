import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from './UserContext';

export default function Login(params) {

    const {setUser}=useContext(UserContext)
    const [data,setData]=useState({
        email:'',
        password:''
      })

    const navigate=useNavigate()

    function handdleSignUp(){
        navigate('/register')
    }

    async function handdleSubmit(e){
        e.preventDefault();
        const {email,password}=data;
        try {
          const {data}=await axios.post('/login',{
            email,password
          });
          if(data.error){
            toast.error(data.error)
          }else{
            setData({}) 
            // console.log(data);
            setUser(data.name)
            toast.success('Login Successful')
            navigate('/')
          }
        } catch (error) {
            console.log(error);
        }
      }

    return(
        <div>
            <h1>Login</h1>
            <form className="login">
                <input 
                    type='email' 
                    value={data.email} 
                    onChange={(e)=>setData({...data,email:e.target.value})} 
                    placeholder='Email'
                />
                <input 
                    type='password' 
                    value={data.password} 
                    onChange={(e)=>setData({...data,password:e.target.value})}
                    placeholder='Password'
                />
                <button className='btn' onClick={handdleSubmit}>Login</button>
                <h6>Don't have an account ?</h6>
                <button className='btn_ls' onClick={handdleSignUp}>SignUp</button>
            </form>
        </div>
    )
};