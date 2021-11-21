import React from 'react'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'
const Layout = ({ children }) => {
    return (
        <div className='page-layout'>
            <Navbar customClass='z-10' />
            <div className='content-wrapper py-12 px-20 flex justify-end'>
                <SideBar />
                <main className='w-10/12 bg-black min-h-screen top-10 right-0 relative z-0'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
