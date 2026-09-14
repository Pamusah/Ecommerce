import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthContext';
const Auth = () => {

  const [mode,setMode]=useState("signup");
  const [error,setError] =useState(null);
  const {register,handleSubmit,formState: {errors}}=useForm();
  const {signUp,user,Login}=useContext(AuthContext)

  function onSubmit(data){

    setError(null)
    let result;
    if(mode==='signup'){
    result = signUp(data.email,data.password)

    }

    else{
      result = Login(data.email,data.password)
    }
    if(result.success){
      alert("You've successfully logged in")
    }
    else{
      setError(result.error)
    }
    
  }

  
  return (
    <div className='page'>
      <div className='container'>
    <div className='auth-container'>
      {user&&<p>User Logged In:{user.email}</p>}
      <h1 className='page-title'>
        {mode==="signup"?"Sign up":
        "Login"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}className='auth-form'>
        {error&&<div className='error-message'>{error}</div>}
        <div className='form-group'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-input' type='email' id='email' {...register("email",{required:"Email is required"})}/>
           {errors.email&&(<span className='form-error'>{errors.email.message}</span>)}
          
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='password'>Password</label>
          <input className='form-input' type='passwords' id='password'{...register("password",{required:"Password is required",
            minLength:{
              value:6,
              message:"Password must be at least 6 characters",

            },
            maxLength:{
              value:12,
              message:"Password must be less than 12 characters"
            }
          })}/>
          {errors.password&&(<span className='form-error'>{errors.password.message}</span>)}
          
        </div>
       
          
        <button type='submit' className='btn btn-primary btn-large' >{mode==="signup"?"Sign up":
        "Login"}</button>
      </form>
      <div className='auth-switch'>
       {
        mode==="signup" ?(<p>
          Already have an account?{""}
          <span className='auth-link' onClick={()=>setMode("Login")}>Login</span>
        </p>):(<p>
          Already have an account?{""}
          <span className='auth-link' onClick={()=>setMode("signup")}>Create Account</span>
        </p>)
       }
    </div>
      </div>
      
    </div>
    </div>
  )
}

export default Auth;
