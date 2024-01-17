"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function Nav() {
  const { data } = useSession()

  return (
    <nav className='flex items-center justify-between p-5'>
      <div className='flex gap-4 items-center'>
        <Link className='text-primary text-2xl font-bold' href={"/"}>Sup's Pizza</Link>
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        <Link href="/">About</Link>
        <Link href="/">Contect</Link>
      </div>
      <div className='flex gap-5 items-center'>
       
        {
          data?.user ?
            <>
             <Link href={"/Pages/profile"} className='cursor-pointer'>Hello,<span className='font-bold'>{data?.user?.name}</span></Link>
            <button className='bg-primary py-2 px-4 text-white rounded-full' onClick={() => signOut()}>Logout</button></>
            :
            <><Link className='bg-primary py-2 px-4 text-white rounded-full' href="/Pages/login">Login</Link></>
        }
      </div>
    </nav>
  )
}

export default Nav