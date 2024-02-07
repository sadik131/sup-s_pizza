"use client"
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useAuth } from '@/app/Provider'
import Loading from './Loading'

function Menu() {
    const [menu, setMenu] = useState([])
    const { loading, setLoading } = useAuth()

    useEffect(() => {
        setLoading(true)
        fetch("/api/uploadItem")
            .then(res => res.json())
            .then(data => {
                const { result } = data
                setMenu(result.slice(-3))
                setLoading(false)
            })
    }, [])

    return (
        <section className=''>
            <div className='text-center'>
                <h2 className='uppercase text-gray-600 text-2xl'>Check Out</h2>
                <h1 className='font-bold text-4xl text-primary'>Menu</h1>
            </div>

            <div className='grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-3'>
                {loading ? <Loading></Loading> 
                :
                    menu.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </section>
    )
}

export default Menu