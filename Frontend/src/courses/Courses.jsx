import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'

function Courses() {
  return (
    <>
    <div className=' dark:bg-white dark:text-slate-900'>
    <Navbar/>
    <div className='min-h-screen '>
    <Course/>
    </div>
    <Footer/>
    </div>

    </>
  )
}

export default Courses
