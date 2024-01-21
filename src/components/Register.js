import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'

export default function Register() {

    const [data,setData]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate();

    function handdleLogin(){
        navigate('/login')
    }

    async function handdleSubmit(e){
        e.preventDefault();
        const {name,email,password}=data;

        try{
        const {data}=await axios.post('/register',{
            name,email,password
        });
        if(data.error){
            toast.error(data.error)
        }else{
            setData({})
            toast.success('Successfully registered and Logged in');
            navigate('/login')
        }
        }catch(err){
        console.log(err)
        }
    }

    return(
        <div style={{"padding": "10px","max-width": "700px","margin": "0 auto"}}>
            <h1>Register</h1>
            <form className="register">
                <input 
                    type='text' 
                    value={data.name} 
                    onChange={(e)=>setData({...data,name:e.target.value})} 
                    placeholder='Name'
                />
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
                <button className='btn' onClick={handdleSubmit}>Sign up</button>
                <h6>Do you have an account ?</h6>
                <button className='btn_ls' onClick={handdleLogin}>Login</button>
            </form>
        </div>
    )
};
