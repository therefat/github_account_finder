import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../assets/css/Layout/Layout.css"

function Layout({ children }) {
  return (
    <div>
         {/* Render the Navbar component */}
        <Navbar/> 
         {/* Container to hold the main content passed as children */}
        <div className='container'>
            { children }
        </div>
        {/* Render the Footer component */}
        <Footer/>
    </div>
  )
}

export default Layout 
