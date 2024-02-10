"use client"
import HeadLink from '@/Components/layout/HeadLink'
import OrderPage from '@/Components/layout/OrderPage'
import { useAuth } from '@/app/Provider'
import React, { useEffect } from 'react'
import Layout from '../dashbord/page'

function page() {
  const { order, setOrder, user } = useAuth()

  useEffect(() => {
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => setOrder(data.result))
  }, [])
  let data = []

  if (user?.roll === "user") {
    data = order.filter(product => product.customerId === user?._id)

  } else {
    data = order
    // console.log(user.roll === "admin" || "shopkeeper")
  }
  console.log(data)


  return (
    <Layout>
      {!data.length && <h1 className='text-3xl text-center my-5'>You doesn't order any thing</h1>}
      {data.map(product=><OrderPage ></OrderPage>)}
    </Layout>
  )
}

export default page