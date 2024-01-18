"use client"
import HeadLink from '@/Components/layout/HeadLink'
import Left from '@/icon/Left'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function page() {
    const [name, setName] = useState("")
    const [catagorys, setCatagorys] = useState([])
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")

console.log(catagorys)
    // get all catagory
    useEffect(()=>{
        fetch("/api/catagory").then(res=>res.json()).then(data=>setCatagorys(data.doc))
    },[])
    return (
        <main className='main-container'>
            <HeadLink></HeadLink>
            <Link className='border border-gray-400 p-1 rounded-lg flex items-center justify-between' href={"/Pages/menu"}>go back <span><Left></Left></span></Link>
            <div className='flex my-5 gap-5'>
                <div>
                    <Image src={"/pizza.png"} height={120} width={100} alt='user' className='rounded-xl' />
                    <label>
                        <input type="file" className='hidden' />
                        <span className='border block text-center w-full mt-1 border-gray-400 rounded-lg'>Edit</span>
                    </label>
                </div>
                <form className='w-full'>
                    <label className='text-gray-500'>Item Name</label>
                    <input
                        className='p-0 m-0'
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                    <label className='text-gray-500'>Discription</label>
                    <input
                        className='p-0 m-0'
                        onChange={(e) => setDiscription(e.target.value)}
                        type="text"
                    />
                    <label className='text-gray-500'>Best Price</label>
                    <input
                        className='p-0 m-0'
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                    />
                    <label className='text-gray-500 block'>Catagory</label>
                    <select>
                        {catagorys.map(cat=>(
                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>

                    <button type='submit' className='bg-primary block text-center w-full text-white p-1 rounded-xl'>Save</button>
                </form>
            </div>
        </main>
    )
}

export default page