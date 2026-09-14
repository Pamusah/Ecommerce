import { createContext,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

export default function AuthProvider({children}){

    const [user,setUser]=useState(null)
    const navigate = useNavigate(

    )
    function signUp(email,password){
        const users = JSON.parse(localStorage.getItem("users"))||"[]"
        if(users.find(u=>u.email===email)){
            return {success:false,error:"Email already exists"}
                                          }
        const newUser={email,password};
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("currentUserEmail",email)
        setUser({email})

        return ({success:true})
    
    }

    function Login(){
        navigate('/')    
    }

    return <AuthContext.Provider value={{signUp,user,Login}}>{children}</AuthContext.Provider>
}



