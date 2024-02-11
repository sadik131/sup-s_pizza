"use client"
import Left from '@/icon/Left'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ProductForm from '@/Components/layout/ProductForm'

function page() {

    // upload new item
    const uploadItem = async (e, name, discription, price, image, selectCat) => {
        e.preventDefault()
        const data = {
            name,
            discription,
            price,
            image,
            selectCat
        }
        console.log(data)
        const uploadPromis = new Promise((resolve, reject) => {
            fetch("/api/uploadItem", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        resolve()
                        setName("")
                        setDiscription("")
                        setPrice("")
                        setImage("")
                    }
                    else reject()
                })
        })
        await toast.promise(uploadPromis, {
            loading: "Loading..",
            success: "Success",
            error: "error"
        })
    }

    return (
        <main className='main-container'>
            <Link className='border border-gray-400 p-1 rounded-lg flex items-center justify-between' href={"/Pages/menu"}>go back <span><Left></Left></span></Link>
            <div className='flex my-5 gap-5'>
                <ProductForm
                    uploadItem={uploadItem}
                />
            </div>
        </main>
    )
}

export default page