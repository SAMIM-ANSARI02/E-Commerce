import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'

const Rout = () => {
  return (
   
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Rout