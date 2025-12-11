import React from 'react'

const Footer = ({dark}) => {
  return (
       <footer className= {dark ? " border font-semibold  bg-[#504b38] " : " border font-semibold  bg-[#1d3e53] "} >
        <p className='text-center text-gray-600 text-white  '> React Todo App </p>
       </footer>
  )
}

export default Footer