import Hero from '@/Components/Hero'
import Menu from '@/Components/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='p-5'> 
    <Hero></Hero>
    <Menu></Menu>
    </main>
  )
}
