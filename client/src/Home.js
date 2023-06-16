import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex   vh-100'>
    <nav className='bg-dark'>
        <h1>
            <Link to ='/'><i className='fas fa-code'></i>Developer </Link>
        </h1>
        <ul>
            <li><Link to ='/register'>Register</Link></li>
            <li><Link to ='/login'>Login</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Home
