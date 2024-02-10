"use client"
import { useAuth } from '@/app/Provider'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function Nav() {
  const { user } = useAuth()

  return (
    <nav className='flex items-center justify-between p-5'>
      <div className='flex gap-4 items-center'>
        <Link className='text-primary text-2xl font-bold' href={"/"}>Sup's Pizza</Link>
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        <Link href="/">About</Link>
        <Link href="/">Contect</Link>
        {
        (user?.roll === "admin" || (user?.roll === "shopkeeper") ) && <Link href="/Pages/dash/dashbord">Dashbord</Link>
        }
      </div>
      <div className='flex gap-5 items-center'>
        <Link href={"/Pages/cart"}>cart(1)</Link>
        {
          user ?
            <>
              <Link href={"/Pages/profile"} className='cursor-pointer'>Hello,<span className='font-bold'>{user?.name}</span></Link>
              <button className='bg-primary py-2 px-4 text-white rounded-full' onClick={() => signOut()}>Logout</button></>
            :
            <><Link className='bg-primary py-2 px-4 text-white rounded-full' href="/Pages/login">Login</Link></>
        }

      </div>
    </nav>
  )
}

export default Nav