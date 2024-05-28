import React from 'react'
import Home from './home/Home'
import {Route, Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './Components/Signup'

const App = () => {
  return (
   <>
   
    <div className='dark:bg-white dark:text-slate-900'>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={<Courses/>} />
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   </div>

   </>
  )
}

export default App
