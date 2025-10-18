import React from 'react'
import {Link} from "react-router-dom"
function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 mt-[16.5vw]'>
       <Link to={'/projects'} className='text-[6.5vw] border-4 leading-[7vw] border-white rounded-full  px-10 pt-3 uppercase'>Projects</Link>
       <Link to={"/agence"} className='text-[6.5vw] border-4 leading-[7vw] border-white rounded-full  px-10 pt-3 uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
