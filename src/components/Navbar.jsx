import React from 'react'

const Navbar = ({ switchTheme , dark } ) => {
  return (

    <nav className={dark ? "bg-[#a59d84] p-2 px-8  flex item-center justify-between " : "bg-[#254b62] p-2 px-8  flex item-center justify-between "}>
      <h1 className="text-3xl font-bold  font-word  text-white ">  Student Bus Pass  </h1>

      <button onClick={() => switchTheme()} className='bg-[#c5c7bc] p-2 rounded-md  cursor-pointer  font-bold '>Change Theme </button>
    </nav>
  )
}

export default Navbar