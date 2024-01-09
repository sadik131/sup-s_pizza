import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <section>
      <h1 className='text-center text-3xl font-bold my-4 text-primary'>Register</h1>
      <form className='max-w-lg mx-auto text-center'>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="submit" className='bg-primary border-none text-white'/>
        <div>
          <h1>or</h1>
          <button className='border w-full flex items-center justify-center border-gray-500  rounded-xl'>
            <Image src="/google.png" alt='google' height={20} width={40} />
            Google
            </button>
            <Link className='my-4 underline ' href="/Pages/login">Login</Link>
        </div>
      </form>
    </section>
  )
}

export default Register