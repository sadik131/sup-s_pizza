import CartCard from '@/Components/CartCard'
import CheckOut from '@/Components/layout/CheckOut'
import { useAuth } from '@/app/Provider'
import React from 'react'

function page() {
  // const { user } = useAuth()
// console.log(user)
  return (
    <div className='px-10 my-5'>
      <h1 className='text-center text-3xl font-bold text-primary'>Cart</h1>
      <div className='flex gap-4 my-5'>
        <div className='w-1/2'>
          <CartCard ></CartCard>
          <div className='border border-gray-500' />
        </div>
        <div className='w-1/2 bg-gray-500 p-4 text-white rounded-2xl'>
          <CheckOut></CheckOut>
        </div>
      </div>
    </div>
  )
}

export default page