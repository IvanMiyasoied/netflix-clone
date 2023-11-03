import React from 'react'

const SignUp = () => {
  return (
    <>
     <div className='w-full h-screen'>
         <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/8c3c4297-79dd-457c-b18c-2ffb09e48bb7/UA-uk-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'> 
                   <div className='max-w-[370px] mx-auto py-16'>
                      <h1 className='text-3xl font-bold'>Sign Up</h1>
                      <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email'/>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                      </form>
                   </div>
                </div>
            </div>
     </div>
    </>
  )
}

export default SignUp





