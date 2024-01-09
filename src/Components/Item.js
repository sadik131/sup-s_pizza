import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Item() {
  return (
    <section className='flex flex-col items-center justify-center  bg-gray-300 p-3 rounded-2xl'>
        <Image src={"/pizza.png"} width={150} height={150}></Image>
        <h1>Veggie Pizza</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque accusantium illum delectus quaerat labore.</p>
        <Button title="Add to cart For $12" varient="bg-primary text-white"></Button>
    </section>
  )
}

export default Item