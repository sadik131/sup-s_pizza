import React from 'react'
import Item from './Item'

function Menu() {
    return (
        <section className=''>
            <div className='text-center'>
                <h2 className='uppercase text-gray-600 text-2xl'>Check Out</h2>
                <h1 className='font-bold text-4xl text-primary'>Menu</h1>
            </div>

            <div className='grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-3'>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </div>
        </section>
    )
}

export default Menu