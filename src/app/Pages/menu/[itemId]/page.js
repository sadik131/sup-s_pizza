"use client"
import React, { useEffect, useState } from 'react';
import Layout from '../../dashbord/page';
import Item from '@/Components/Item';

function Page({ params }) {
    const [item, setItem] = useState()

    useEffect(() => {
        const url = `/api/uploadItem/${params?.itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data.result))
    }, [params?.itemId])

    return (
        <Layout>
            <Item item={item} />
        </Layout>
    );
}

export default Page;
