import { useAuth } from '@/app/Provider'
import Image from 'next/image'
import React from 'react'

function OrderPage() {
    const {user} = useAuth()
  return (
    <div className='flex justify-between'>
        <Image src={"/beef.png"} width={105} height={105} alt="beef" />
        <span>customer Name: </span>
        <span className=''>painding</span>
    </div>
  )
}

export default OrderPage