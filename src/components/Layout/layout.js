import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import SideBar from '../Sidebar/sidebar'
const Layout = ({ children }) => {
    return (
        <div className='page-layout relative pb-20'>
            <Navbar customClass='z-10' />
            <div className='content-wrapper lg:py-12 py-6 md:px-5 lg:px-20 flex lg:justify-end'>
                <SideBar />
                <main className='w-screen lg:w-10/12 bg-red-500 min-h-screen top-10 right-0 relative z-0 flex items-center justify-center'>
                    {children}
                </main>
            </div>
            <Footer customClass='w-screen right-0 bottom-0 z-40' />
        </div>
    )
}

export default Layout
