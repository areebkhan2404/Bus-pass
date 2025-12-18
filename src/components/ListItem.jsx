import React from 'react'

const ListItem = ({ todo, removeTodo ,  editTodo, dark }) => {
  return (

    <li className= {dark? "relative  my-3 bg-[#a59d84] rounded-md p-4" : "relative  my-3 bg-[#50818d] rounded-md p-4" }>

      <p className='text-sm text-white my-4'>#{todo.id}</p>
      <h1 className='text-lg font-bold my-2 '>{todo.text} </h1>
        <h1 className='text-lg font-bold my-2 '>{todo.last} </h1>
      <h1 className='text-lg font-bold my-2 '> {todo.age} </h1>
      <h1 className='text-lg font-bold my-2 '> {todo.email} </h1>
      <h1 className='text-lg font-bold my-2 '> {todo.phone}</h1>
      <h1 className='text-lg font-bold my-2'>{todo.gender}</h1>
      <span className='absolute bottom-5 right-5'>
        <button  onClick={()=>editTodo(todo) }className='bg-yellow-500 hover:bg-yellow-600 text-sm font-bold p-1 px-2 text-white rounded-md cursor-pointer '>Edit</button>
        <button onClick={()=>removeTodo(todo.id)} className='bg-red-500 hover:bg-red-700 text-sm font-bold p-1 px-2 text-white rounded-md  mx-2  cursor-pointer'>Delete</button>
      </span>
    </li>
  ) 
}

export default ListItem
