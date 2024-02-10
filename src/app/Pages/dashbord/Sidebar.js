import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col gap-5'>
        <Link href={"/Pages/dash/dashbord"}>Dashbord</Link>
        <Link href={"/Pages/menu"}>Manage Item</Link>
        <Link href={"/Pages/catagory"}>Catagorys</Link>
        <Link href={"/Pages/user"}>User</Link>
        <Link href={"/Pages/order"}>Order</Link>
    </div>
  )
}

export default Sidebar