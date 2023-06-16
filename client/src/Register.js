import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    confirmpassword: '',
  });

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/register', data) // Replace the URL with your API endpoint
      .then(res => {
        console.log(res.data); // Handle the response data
      })
      .catch(error => {
        console.error(error); // Handle any error that occurred
      });
  };

  return (
    <div>
      <nav className='bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-code'></i>Developer
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <section>
        <h1>Sign Up</h1>
        <p>create your account</p>
        <form onSubmit={submitHandler} autoComplete='off'>
          <div>
            <input
              type='text'
              placeholder='Name'
              name='fullname'
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Mobile'
              name='mobile'
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmpassword'
              onChange={changeHandler}
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
