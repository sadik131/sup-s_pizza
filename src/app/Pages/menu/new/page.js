"use client"
import HeadLink from '@/Components/layout/HeadLink'
import Left from '@/icon/Left'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import toast from 'react-hot-toast'
import { storage } from '@/app/firebase'

function page() {
    const [name, setName] = useState("")
    const [catagorys, setCatagorys] = useState([])
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [catagory, setCatagory] = useState("")


    // get all items
    useEffect(()=>{
        fetch("/api/catagory").then(res=>res.json()).then(data=>setCatagorys(data.doc))
    },[])

    // upload image
    const uploadFile = (e) =>{
        e.preventDefault()
        const file = e.target.files[0]
        const fileRef = ref(storage, 'images/' + file.name);
        uploadBytes(fileRef,file).then((data) =>{
            getDownloadURL(data.ref)
            .then(url=>{
                setImage(url)
            })
        })
    }
    
    // upload new item
    const uploadItem = async(e) =>{
        e.preventDefault()
        const data ={
            name,
            discription,
            price,
            image,
            catagory
        }
        const uploadPromis = new Promise((resolve,reject)=>{
            fetch("/api/uploadItem",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    resolve()
                    setName("")
                    setDiscription("")
                    setPrice("")
                    setImage("")
                }
                else reject()
            })
        })
        await toast.promise(uploadPromis,{
            loading:"Loading..",
            success:"Success",
            error:"error"
        })
    }

    return (
        <main className='main-container'>
            <HeadLink></HeadLink>
            <Link className='border border-gray-400 p-1 rounded-lg flex items-center justify-between' href={"/Pages/menu"}>go back <span><Left></Left></span></Link>
            <div className='flex my-5 gap-5'>
                <div>
                   {image ? <img src={image} alt='user' className='rounded-xl h-20 w-28' /> :<div className='bg-gray-400 text-center text-white rounded-xl'>select Image</div>}
                    <label>
                        <input type="file" className='hidden' onChange={uploadFile}/>
                        <span className='border block text-center w-full mt-1 border-gray-400 rounded-lg'>Edit</span>
                    </label>
                </div>
                <form onSubmit={uploadItem} className='w-full'>
                    <label className='text-gray-500'>Item Name</label>
                    <input
                        className='p-0 m-0'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                    <label className='text-gray-500'>Discription</label>
                    <input
                        className='p-0 m-0'
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        type="text"
                    />
                    <label className='text-gray-500'>Best Price</label>
                    <input
                        className='p-0 m-0'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                    />
                    <label className='text-gray-500 block'>Catagory</label>
                    <select onChange={(e)=>setCatagory(e.target.value)}>
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