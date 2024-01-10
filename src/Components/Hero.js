import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <section className='grid grid-cols-2'>
            <div >
                <h1 className='text-7xl font-semibold my-4'>EveryThing <br /> is Better <br /> With A <span className='text-primary'>pizza</span></h1>
                <p className='text-2xl text-gray-600'>Pizza is the missing picec that make every day complite a simple yet delicious joy in life</p>
                <div className='flex gap-4 my-4'>
                    <Button
                        title="Order Now"
                        varient="uppercase bg-primary text-white"
                        svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        }></Button>
                    <Button
                        title="Lern More"
                        varient=" bg-primary text-white"
                        svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        }></Button>
                </div>
            </div>
            <div className=' relative'>
                <Image src={"/pizza.png"} alt='pizza' layout={"fill"} objectFit={"containe"} />
            </div>
        </section>
    )
}

export default Hero

