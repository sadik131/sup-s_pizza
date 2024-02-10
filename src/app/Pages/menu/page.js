"use client"
import Item from '@/Components/Item'
import Loading from '@/Components/Loading'
import HeadLink from '@/Components/layout/HeadLink'
import { useAuth } from '@/app/Provider'
import Right from '@/icon/Right'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../dashbord/page'

function page() {
  const { loading, setLoading } = useAuth()
  const [menu, setMenu] = useState([])
  
  useEffect(() => {
    setLoading(true)
    fetch("/api/uploadItem")
      .then(res => res.json())
      .then(data => {
        setMenu(data.result)
        setLoading(false)
      })
  }, [])

  return (
    <Layout main className="main-container">
      <Link className='border border-gray-400 p-1 rounded-lg flex items-center justify-between' href={"/Pages/menu/new"}>Create new item <span><Right></Right></span></Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5'>
        {
          loading ? <Loading></Loading> :
            menu.map(item => <Link href={`/Pages/menu/${item._id}`}><Item key={item._id} item={item}></Item></Link>)
        }
      </div>
    </Layout>
  )
}

export default page