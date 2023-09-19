import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext=createContext();

export function UserContextProvider({children}){
    const [user,setUser]=useState('')
    useEffect(()=>{
        axios.get('/profile').then((userinfo)=>{
          setUser(userinfo.data.name)
        })
      },[])
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
