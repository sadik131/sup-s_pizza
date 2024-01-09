import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className='flex items-center justify-between p-5'>
        <Link className='text-primary text-2xl font-bold' href={"/"}>Sup's Pizza</Link>
        <div className='flex gap-5 items-center'>
            <Link href="/">Home</Link>
            <Link href="/">Menu</Link>
            <Link href="/">About</Link>
            <Link href="/">Contect</Link>
            <Link className='bg-primary py-2 px-4 text-white rounded-full' href="/Pages/login">Login</Link>
        </div>
    </nav>
  )
}

export default Nav