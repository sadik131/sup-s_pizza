"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

function Register() {
  const route = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState('')
  const [password, setPassword] = useState("")

  const handelForm = async (e) => {
    e.preventDefault()
    const formData = {
      name: name,
      email: email,
      password: password
    }
    try {
      if (!email || !password || !name){
        setError("All fields are necessary")
        return
      }
      
      // check the user is exist or not
//       const check = await fetch("http://localhost:3000/api/userExist",{
//         method:"POST",
//         headers:{
//           "Content-type":"application/json"
//         },
//         body:JSON.stringify({email})
//       })

//       const { user } = await check.json();
// console.log(user)

      // register the user
        const register = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      if (register.ok) {
        setError("")
        const form = e.target
        form.reset()
        route.push("/")
      }
    } catch (error) {
      console.log(error, "fontend")
    }

  }

  return (
    <section>
      <h1 className='text-center text-3xl font-bold my-4 text-primary'>Register</h1>
      <form className='max-w-lg mx-auto text-center' onSubmit={handelForm}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
        <input type="submit" className='bg-primary border-none text-white' />
        {error && <div className='bg-red-500 text-white font-bold'>{error}</div>}
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