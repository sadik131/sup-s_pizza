"use client"
import HeadLink from '@/Components/layout/HeadLink'
import { useAuth } from '@/app/Provider'
import React, { useEffect } from 'react'

function page() {
  const { order, setOrder, user } = useAuth()
  useEffect(() => {
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => setOrder(data.result))
  }, [])
  console.log(order)

  return (
    <section>
      <HeadLink></HeadLink>
      <h1>order</h1>
    </section>
  )
}

export default page