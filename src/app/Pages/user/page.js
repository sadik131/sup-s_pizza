"use client"

import HeadLink from '@/Components/layout/HeadLink'
import React, { useEffect, useState } from 'react'

function page() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        fetch("/api/user")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }
    console.log(users)

    // make admin page
    const makeAdmin = (id) => {
        fetch("/api/profile", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id: id })
        })
            .then(res => res.json())
            .then(data => {
                getUser()
                alert("make admin")
            })
    }

    // delete user
    const deleteUser = (id) => {
        fetch("/api/profile", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ _id: id })
        })
            .then(res => res.json())
            .then(data => {
                getUser()
                alert("DELETE USER")
            })
    }

    return (
        <main className='main-container'>
            <HeadLink></HeadLink>
            <div className='flex bg-gray-300 items-center px-4 py-2 rounded-xl justify-between'>
                <span>Name</span>
                <span>Email</span>
                <span>Admin/Delete</span>
            </div>
            <div>
                {users.map(user => (
                    <div className='flex items-center px-4 py-2 rounded-xl justify-between'>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <div className='flex gap-2 cursor-pointer'>
                            {!user.isAdmin ? <button
                                onClick={() => makeAdmin(user._id)}
                                className='border p-1 rounded-lg  text-gray-700'>Admin</button> :
                                <h1 className='italic font-bold'>admin</h1>
                            }
                            <button onClick={()=>deleteUser(user._id)} className='border p-1 rounded-lg  text-gray-700'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default page