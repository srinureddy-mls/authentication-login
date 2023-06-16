import React from 'react'
import { useState } from 'react';
import axios from  'axios'
import { useNavigate } from 'react-router-dom';
import { Link,Redirect,NavLink } from 'react-router-dom';



function Login(){
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    const changeHandler =e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
   
    const submitHandler =e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res =>localStorage.setItem('token',res.data.token)
                
            )
            console.log("login succefully")
    }
    // if(localStorage.getItem('token')){
    //     return <useNavigate to ="/dashbord"/>
    // }
    return (
        <div>
           <nav className='bg-dark'>
        <h1>
            <Link to ='/'><i className='fas fa-code'></i>Developer </Link>
        </h1>
        <ul>
            <li><Link to ='/register'>Register</Link></li>
            <li><Link to ='/login'>Login</Link></li>
        </ul>
    </nav>
    <section>
        <h1>Sigin</h1>
        <form onSubmit={submitHandler} autoComplete='off'>
            <div>
                <input
                type='email'
                placeholder="Email Address"
                name='email'
                onChange={changeHandler}
                requierd/>
            </div>
            <div>
                <input 
                type='password'
                placehholder='password'
                name="password"
                onChange={changeHandler}
                />
            </div>
            <input type='submit' className='"btn btn-primary' value='Login'/>
        </form>
        <p>Don't have an account? <Link to= "/register">Sign Up</Link></p>
    </section>
        </div>
    )
}

export default Login;