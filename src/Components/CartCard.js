import Trash from '@/icon/Trash'
import Image from 'next/image'
import React from 'react'

function CartCard({}) {
  // console.log(order)
  return (
    <div className='flex justify-between items-center'>
        <Image src={"/beef.png"} width={105} height={105} alt="beef" />
        <h2>chees pizza</h2>
        <h2>$ 20</h2>
        <Trash></Trash>
        
    </div>
  )
}

export default CartCard