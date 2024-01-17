"use client"
import HeadLink from '@/Components/layout/HeadLink'
import Edit from '@/icon/Edit'
import Trash from '@/icon/Trash'
import React, { useEffect, useState } from 'react'

function page() {
    const [name, setName] = useState("")
    const [catagory, setCatagory] = useState([])
    const [edit, setEdit] = useState(false)

    // get all catagory
    useEffect(() => {
        getCatagory()
    }, [])

    const getCatagory = async () => {
        fetch("/api/catagory")
            .then(res => res.json())
            .then(data => {
                setName("")
                setCatagory(data.doc)
            })
    }


    // send catagory name to db
    const handelForm = async (e) => {
        e.preventDefault()

        const res = await fetch("/api/catagory", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name })
        })
        if (res.ok) {
            getCatagory()
            setName("")
        }
    }

    // delete for catagory
    const deleteCatagory = (id) => {
        console.log(edit)
        fetch("/api/catagory", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                alert("delete")
                getCatagory()
            }
            )
    }

    // edit catagory
    const editCatagory = (id, name) => {
        setEdit(true)
        setName(name)

        // fetch("/api/catagory", {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ id ,name})
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("edit")
        //         getCatagory()
        //     }
        //     )
    }

    return (
        <main className='main-container'>
            <HeadLink></HeadLink>
            <div>
                <label>{edit ? `Update catagory name: ${name}` : `New catagory name`}</label>
                <form onSubmit={handelForm} className='flex gap-3 items-center'>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <button type='submit' className='button'>{edit ? "Save" : "Create"}</button>
                </form>
            </div>
            {catagory && catagory.map(c => (
                <div className='bg-gray-500 text-white my-1 flex items-center justify-between rounded-xl p-2' key={c._id}>
                    {c.name}
                    <div className='flex gap-3'>
                        <span className='cursor-pointer' onClick={() => {
                            editCatagory(c._id, c.name)
                        }}>
                            <Edit></Edit>
                        </span>
                        <span className="cursor-pointer" onClick={() => { deleteCatagory(c._id) }}>
                            <Trash></Trash>
                        </span>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default page