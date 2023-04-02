
import React from 'react'
import Navbar from '../components/navbar'


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