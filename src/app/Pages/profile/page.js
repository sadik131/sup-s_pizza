"use client"
import HeadLink from '@/Components/layout/HeadLink'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import { storage } from '../../firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function Profile() {
  const { data, status } = useSession()
  const route = useRouter()
  const [name, setName] = useState(data?.user?.name || "")
  const [email, setEmail] = useState(data?.user?.email || "")
  const [number, setNumber] = useState("")
  const [image, setImage] = useState("")
  const [address, setAddress] = useState("")
  const [street, setStreet] = useState("")
  const [file, setFile] = useState(null)
  const [post, setPost] = useState("")
  const [country, setCountry] = useState("")


  if (status === "unauthenticated") {
    route.push("/Pages/login")
  }

  useEffect(() => {
    setName(data?.user?.name)
    setEmail(data?.user?.email)
  }, [data])


  // update profile
  const handelFormSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name, number, address, street, post, country, email
    }
    const res = await fetch("http://localhost:3000/api/profile", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
    console.log(res)
    if (res.status === 200) {
      alert("successfull")
    }

  }


  // upload image
  const handelupload = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    console.log("first", file)
    if (file) {
      const storageRef = getStorage(storage);
      const fileRef = ref(storageRef, file.name);
  
      uploadBytes(fileRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then(url => {
              console.log(url);
              setImage(url);
            })
        })
        .catch(error => {
          console.error("Error uploading file: ", error);
        });
    } else {
      alert("File missing");
    }
  }

  return (
    <main className='main-container'>
      <HeadLink></HeadLink>
      <h1 className='text-primary text-center text-2xl font-bold'>Profile</h1>
      <div className='flex my-5 gap-5'>
        <div>
          <Image src={"/user.jpg"} height={120} width={100} alt='user' className='rounded-xl' />
          <label>
            <input type="file" className='hidden' onChange={handelupload} />
            <span className='border block text-center w-full mt-1 border-gray-400 rounded-lg'>Edit</span>
          </label>
        </div>
        <form action="" onSubmit={handelFormSubmit}>
          <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
          <input type="email" disabled value={email || ""} />
          <input
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder='Phon number' />
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder='address' />
          <div className='flex gap-3'>
            <input
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              placeholder='street' />
            <input
              onChange={(e) => setPost(e.target.value)}
              type="text"
              placeholder='postCode' />
          </div>
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder='country' />
          <button type='submit' className='bg-primary block text-center w-full text-white p-1 rounded-xl'>Save</button>
        </form>
      </div>
    </main>
  )
}

export default Profile