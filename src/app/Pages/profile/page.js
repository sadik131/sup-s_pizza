"use client"
import HeadLink from '@/Components/layout/HeadLink'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '@/app/firebase'
import toast from 'react-hot-toast'


function Profile() {
  const { data, status } = useSession()
  const route = useRouter()
  const [name, setName] = useState(data?.user?.name || "")
  const [email, setEmail] = useState(data?.user?.email || "")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [street, setStreet] = useState("")
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState("")
  const [post, setPost] = useState("")
  const [country, setCountry] = useState("")


  if (status === "unauthenticated") {
    route.push("/Pages/login")
  }

  useEffect(() => {
    setName(data?.user?.name)
    setEmail(data?.user?.email)

  }, [data])

  useEffect(() => {
    setLoading(true)
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => {
        console.log(data.user.userImag)
        setName(data.user.name)
        setNumber(data.user.number)
        setAddress(data.user.address)
        setStreet(data.user.street)
        setPost(data.user.post)
        setCountry(data.user.country)
        setImg(data.user.userImag)
        setLoading(false)
      })

  }, [email])



  // update profile
  const handelFormSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name, number, address, street, post, country, email
    }
    const uploadPromis = new Promise(async (resolve, reject) => {
      fetch("http://localhost:3000/api/profile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(!!data.status){
            resolve()
          }
          else{
            reject()
          }
        })
    })
    await toast.promise(uploadPromis,{
      loading:"Saveing..",
      success:"Profile saved!",
      error:"error"
    })
  }


  // upload image
  const handelupload = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file) {
      const fileRef = ref(storage, 'images/' + file.name);
      uploadBytes(fileRef, file).then((data) => {
        getDownloadURL(data.ref)
          .then(url => {
            setImg(url)
            const imageUrl = {
              email, userImag: url
            }
            fetch("/api/profile", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(imageUrl)
            })
              .then(res => res.json())
              .then(data => console.log(data, "success"))

          })
      })

    } else {
      alert("File missing");
    }
  }



  return (
    <main className='main-container'>
      <HeadLink></HeadLink>
      {loading && <h1 className='font-bold '>Loading... user Info</h1>}
      <h1 className='text-primary text-center text-2xl font-bold'>Profile</h1>
      <div className='flex my-5 gap-5'>
        <div>
          <img src={img ? img : "/user.jpg"} alt='user' className='rounded-xl h-20 w-28' />
          <label>
            <input type="file" className='hidden' onChange={handelupload} />
            <span className='border block text-center w-full mt-1 border-gray-400 rounded-lg'>Edit</span>
          </label>
        </div>
        <form action="" onSubmit={handelFormSubmit}>
          <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
          <input type="email" disabled value={email || ""} />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder='Phon number' />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder='address' />
          <div className='flex gap-3'>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              placeholder='street' />
            <input
              value={post}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              placeholder='postCode' />
          </div>
          <input
            value={country}
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