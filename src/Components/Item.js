import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/app/Provider'

function Item({ item }) {
  const { user } = useAuth()
  
  const addCart = (item) => {
    fetch("/api/cart", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ item, user })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <section className='flex text-center flex-col items-center justify-center  bg-gray-300 p-3 rounded-2xl'>
      <img src={item?.image} alt='pizza' />
      <h1 className='my-1 font-bold text-2xl text-primary'>{item?.name}</h1>
      <p className='my-2'>{item?.discription}</p>
      <Button onClick={() => addCart(item)} title={`Add to cart For $${item?.price}`} varient="bg-primary text-white"></Button>
    </section>
  )
}

export default Item