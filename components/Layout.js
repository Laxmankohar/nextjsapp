
import React from 'react'
import Navbar from '../components/Navbar'


function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='main'>
                {children}
            </main>
        </>
    )
}

export default Layout