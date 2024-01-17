import HeadLink from '@/Components/layout/HeadLink'
import Right from '@/icon/Right'
import Link from 'next/link'

function page() {
  
  return (
    <main className="main-container">
      <HeadLink></HeadLink>
      <Link className='border border-gray-400 p-1 rounded-lg flex items-center justify-between' href={"/Pages/menu/new"}>Create new item <span><Right></Right></span></Link>
    </main >
  )
}

export default page