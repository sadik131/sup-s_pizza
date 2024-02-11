import React, { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '@/app/firebase'

function ProductForm({ uploadItem }) {

    const [name, setName] = useState("")
    const [catagorys, setCatagorys] = useState([])
    const [selectCat, setSelectCat] = useState("")
    const [discription, setDiscription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    // get all items
    useEffect(() => {
        fetch("/api/catagory").then(res => res.json()).then(data => {
            setCatagorys(data.doc)
            if (data.doc.length > 0) {
                setSelectCat(data.doc[0].name);
            }
        })
    }, [])


    // upload image
    const uploadFile = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const fileRef = ref(storage, 'images/' + file.name);
        uploadBytes(fileRef, file).then((data) => {
            getDownloadURL(data.ref)
                .then(url => {
                    setImage(url)
                })
        })
    }

    return (
        <div className='w-full'>
            <div className='w-28'>
                {image ? <img src={image} alt='user' className='rounded-xl h-20 w-28' /> : <div className='bg-gray-400 text-center text-white rounded-xl h-20 w-28'>select Image</div>}
                <label>
                    <input type="file" className='hidden' onChange={uploadFile} />
                    <span className='border block text-center w-full mt-1 border-gray-400 rounded-lg'>Edit</span>
                </label>
            </div>
            <form onSubmit={(e) => uploadItem(e, name, discription, price, selectCat)} className='w-full'>
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
                <select onChange={(e) => setSelectCat(e.target.value)}>
                    {catagorys.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)}
                </select>
                <button type='submit' className='bg-primary block text-center w-full text-white p-1 rounded-xl'>Save</button>
            </form>
        </div>
    )
}

export default ProductForm