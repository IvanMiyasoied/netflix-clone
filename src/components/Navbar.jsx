import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'




const Navbar = () => {

const {user, logOut} = UserAuth()

// console.log(user.email);




  return (
      <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>

        </Link>

        {user?.email ? 
       <div>
        <Link to='/login'>
       <button className='text-white pr-4'>Account</button>

        </Link>
        <Link to='/signup'>
       <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>

        </Link>
       </div>  : 
       <div>
        <Link to='/login'>
       <button className='text-white pr-4'>Sign in</button>

        </Link>
        <Link to='/signup'>
       <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>

        </Link>
       </div>}
    </div>
  )
}

export default Navbar