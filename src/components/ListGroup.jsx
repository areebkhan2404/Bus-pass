import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos, removeTodo , editTodo }) => {


    if(todos.length === 0){
      return(
        <h1 className="text-center my-4 text-black ">No Student Yet </h1>
      )
    }



  return (
    

        <ul className='my-4'>
{
            todos.map ((todo) =>  <ListItem  key={todo.id}  todo={todo}  removeTodo={removeTodo}  editTodo={editTodo}/> ) 
}
    </ul>
  )
}

export default ListGroup