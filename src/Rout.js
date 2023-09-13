import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import Oproduct from './Oproduct'

const Rout = () => {
  return (
   
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Oproduct/>}/>
    </Routes>
    </>
  )
}

export default Rout