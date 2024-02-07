"use client"
import { useAuth } from '@/app/Provider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeadLink() {
    const { user } = useAuth()
    const path = usePathname()

    return (
        <div className='flex gap-5 justify-center my-4'>
            <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("profile") && "active"}`} href={"/Pages/profile"}>Profile</Link>
            {
                user?.roll === "admin" && <>
                    <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("catagory") && "active"}`} href={"/Pages/catagory"}>Catagorys</Link>
                    <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("menu") && "active"}`} href={"/Pages/menu"}>Menu item</Link>
                    <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("user") && "active"}`} href={"/Pages/user"}>User</Link>
                    <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("order") && "active"}`} href={"/Pages/order"}>Order</Link>
                </>
            }
            
                 <Link className={`p-2 bg-gray-400 rounded-xl ${path.includes("order") && "active"}`} href={"/Pages/order"}>Order</Link>
                
        </div>
    )
}

export default HeadLink