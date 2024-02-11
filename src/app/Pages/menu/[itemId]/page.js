"use client"
import React, { useEffect, useState } from 'react';
import Layout from '../../dashbord/page';
import Item from '@/Components/Item';
import ProductForm from '@/Components/layout/ProductForm';
import Sidebar from '../../dashbord/Sidebar';

function Page({ params }) {
    const [item, setItem] = useState()

    useEffect(() => {
        const url = `/api/uploadItem/${params?.itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data.result))
    }, [params?.itemId])
    console.log(item)

    return (
        <Layout>
            {/* <Sidebar></Sidebar> */}
        </Layout>
    );
}

export default Page;
