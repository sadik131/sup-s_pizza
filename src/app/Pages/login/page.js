"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


import React, { useEffect, useState } from 'react'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const route = useRouter()

  useEffect(()=>{
    setError('')
  },[email,password])

  const handelForm = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', { redirect: false, email, password });
      if (res.error) {
        setError("Wrong creadinsial")
        return
      }
      route.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <h1 className='text-center text-3xl font-bold my-4 text-primary'>Login</h1>
      <form onSubmit={handelForm} className='max-w-lg mx-auto text-center'>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
        <input type="submit" className='!bg-primary cursor-pointer border-none text-white' />
        <div>
          {error && <div className='bg-red-500 text-white font-bold rounded-lg'>{error}</div>}
          <h1>or</h1>
          <button className='border w-full cursor-pointer flex items-center justify-center border-gray-500  rounded-xl'>
            <Image src="/google.png" alt='google' height={20} width={40} />
            Google
          </button>
          <Link className='my-4 underline cursor-pointer ' href="/Pages/register">Register</Link>
        </div>
      </form>
    </section>
  )
}

export default Login