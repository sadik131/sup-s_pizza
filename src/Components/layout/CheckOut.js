"use client"
import React, { useEffect, useState } from 'react'
import InfoInput from '../InfoInput'
import { useAuth } from '@/app/Provider'

function CheckOut() {
    const { user } = useAuth()
    const [number, setNumber] = useState(user?.number || "")
    const [address, setAddress] = useState(user?.address || "")
    const [street, setStreet] = useState(user?.street || "")
    const [post, setPost] = useState(user?.post || "")
    const [country, setCountry] = useState(user?.country || "")

    useEffect(() => {
        setNumber(user.number)
        setAddress(user.address)
        setStreet(user.street)
        setPost(user.post)
        setCountry(user.country)    
      }, [user])
    return (
        <div>
            <h1>Checkout</h1>
            <InfoInput
                number={number}
                address={address}
                street={street}
                post={post}
                country={country}
                setNumber={setNumber}
                setAddress={setAddress}
                setStreet={setStreet}
                setPost={setPost}
                setCountry={setCountry}
            ></InfoInput>
            <button className='bg-primary text-white font-bold w-full py-1 rounded-xl '>Order for $120</button>
        </div>
    )
}

export default CheckOut