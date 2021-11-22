import React, { useState } from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'

import './layout.css'
const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const handleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <div className='z-0'>
            <div className='page-layout relative pb-20 bg-white h-auto min-h-screen z-20 mb-40'>
                <Navbar customClass='z-0' />
                <SideBar
                    customClass='z-40'
                    handleSideBar={handleSideBar}
                    isSidebarOpen={isSidebarOpen}
                />
                <div
                    className={
                        (!isSidebarOpen
                            ? 'justify-center'
                            : 'lg:py-12 md:px-5 lg:px-20 lg:justify-end  min-h-screen') +
                        '' +
                        'content-wrapper justify-center flex py-16'
                    }>
                    <main className='w-screen lg:w-10/12 h-auto top-10 right-0 relative z-10 vflex items-center justify-center'>
                        {children}
                    </main>
                </div>
            </div>
            <Footer customClass='w-screen right-0 bottom-0 z-0' />
        </div>
    )
}

export default Layout
