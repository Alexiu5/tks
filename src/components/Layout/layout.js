import React from 'react'
import Navbar from '../Navbar/navbar'
const Layout = ({ children }) => {
    return (
        <div className='page-layout'>
            <Navbar />
            <div className='content-wrapper py-12 px-20'>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout
