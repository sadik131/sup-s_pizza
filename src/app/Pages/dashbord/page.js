import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <div className='flex w-full justify-center'>
            <div className="w-[20%] p-2h-screen ">
                <Sidebar />
            </div>
            <div className='w-[70%]'>
                {children}
            </div>
        </div>
    )
}

export default Layout