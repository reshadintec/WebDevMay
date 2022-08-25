import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

function Layout({ children}) {
  return (
    <BrowserRouter>
        <Header/>
        {children}
        <Footer/>
        </BrowserRouter>
  )
}

export default Layout
