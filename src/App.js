import React from 'react'
import {Nav} from './nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './Rout'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
         <Nav/>
         <Rout/>
         <Footer/>
    </BrowserRouter>
     
    </>
   
  )
}

export default App