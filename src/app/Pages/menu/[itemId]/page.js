"use client"
import { useAuth } from '@/app/Provider';
import React, { useEffect } from 'react';

function Page({ params }) {
    const {menu} = useAuth()
    // console.log(params)

    useEffect(()=>{
        const url =`/api/uploadItem/${params?.itemId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[params?.itemId])

    // console.log(menu.find(item=>item.id === params?.itemId))
    return (
        <div>page {params?.itemId}</div>
    );
}

export default Page;
