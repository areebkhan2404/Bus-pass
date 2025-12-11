import { useState }from "react";
import ListGroup from "./components/ListGroup";
import Navbar from   "./components/Navbar";
import Form  from "./components/Form";
import Footer from "./components/Footer";



const App = () => {

 const [ todos, setTodos ] = useState([
        

//  {    id : 1 ,
//     text : "Something here...."
//     },
  

    
//  {    id : 2,
//     text : "Something here.... 2"
//     }
 
 ])
       
 const [edit , setEdit] = useState ({
      
  todo : {},
  isEdit : false 

 })

   const [dark , setDark] = useState (true  )

  const switchTheme = () => {

   setDark(dark ? false : true )       
      
  }


  //  Add Todo

const addTodo = (todo) => {
   
  setTodos ([todo, ...todos])

}
   
// Remove Todo 

const  removeTodo = (id) => {
   setTodos(todos.filter (todo => todo.id !== id ) )
}
  

//  Edit Todo
  
const editTodo = (todo) => {

  setEdit ({
   todo : todo ,
  isEdit : true 
  })

}

   
// update Todo
  const updateTodo = (id , updatedTodo) => {
     setTodos (todos.map(todo => todo.id === id ? updatedTodo : todo ))
     setEdit ({todo : {}, isEdit :false })
  } 







  return (

     
    <>
      <div className="">
           <Navbar switchTheme={switchTheme}  dark={dark}/>
   <div className={dark?"p-8  min-h-screen  bg-[rgb(236,235,222)]":"p-8  min-h-screen  bg-[#78b9b5]"}>
    
    <div className=  {dark ? " rounded-md bg-[#c1baa1]  p-2 px-6 " : " rounded-md bg-[#476d7c]  p-2 px-6 "} >
    <Form   addTodo = {addTodo} edit={edit}  updateTodo={updateTodo}  dark={dark}/>
    <ListGroup   todos= {todos} removeTodo={removeTodo} editTodo={editTodo}  dark={dark} />
   </div>
   </div>

   <Footer dark={dark }/>
      </div>
    </>    
  );
};

export default App