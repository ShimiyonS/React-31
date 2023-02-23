import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'



function Portal() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
        </>
    )
}

export default Portal