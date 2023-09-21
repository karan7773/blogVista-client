import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext=createContext();

export function UserContextProvider({children}){
    const [user,setUser]=useState(null)
    
    useEffect(()=>{
        axios.get('/profile').then((userinfo)=>{
          setUser(userinfo.data)
        })
        .catch((error)=>{
          setUser(null)
        })
      })
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
