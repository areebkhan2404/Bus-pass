import React, { useEffect, useState } from "react"

const Form = ({ addTodo, edit, updateTodo  , dark   }) => {


  const [text, setText] = useState("")
  const [last, setLast] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")

  console.log(edit.todo.text)

  const handleSubmit = (e) => {
    e.preventDefault()

    // !edit.isEdit ? addTodo({

    //   id: crypto.randomUUID(),
    //   text: text,
    //   age,
    //   email,
    //   phone,
    // }) : updatedTodo({
    //   up
    //   id: edit.todo.id,
    //   text
    // })    

    if (!edit.isEdit) {
      addTodo({
        id: crypto.randomUUID(),
        text: text,
        last : last,
        age: age,
        email: email,
        phone: phone,
        gender: gender,
      })
    } else {
      updateTodo(
        edit.todo.id,
        {
          id: edit.todo.id,
          text: text,
          last: last,
          age: age,
          email: email,
          phone: phone,
          gender: gender,
        })


    }



    setText("")
    setLast("")
    setAge("")
    setEmail("")
    setPhone("")
    setGender("")
  }

  useEffect(() => {

    setText(edit.todo.text)
    setLast(edit.todo.last)
    setAge(edit.todo.age)
    setEmail(edit.todo.email)
    setPhone(edit.todo.phone)
    setGender(edit.todo.gender)

  }, [edit])

  return (

    <form onSubmit={handleSubmit} className=   {dark? "my-4 p-4 rounded-md  shadow-md  bg-[#d7d3bf]": "my-4 p-4 rounded-md  shadow-md  bg-[#77abb7]"}>



      {/* <div className="  flex  p-6 border  gap-4  flex-col  "> */}

      <div className=" my-2 p-2  ">
        <h1 className="font-bold  text-gray-800  text-lg  "> Student  Name  </h1>
      </div>



      <div className="  gap-2  flex justify-between p-2 grid-cols-2 grid    ">

        <div className="    w-full ">
          <input required onChange={(e) => setText(e.target.value)} value={text} placeholder='Enter Your Name  ' type="text" className=' w-full  bg-white  my-2 cursor-pointer   p-2 rounded-md ' />
          <h1 className="font-smbold">First name </h1>
        </div>

        <div className="w-full ">
          <input onChange{(e) => setLast(e.target.value)} value={last} type="text" placeholder=" Enter Your name " className=' my-2 border border-gray-200 cursor-pointer  w-full  border-black  bg-white   p-2 rounded-md ' />
          <h1 className="font-smbold   "> Last name </h1>
        </div>
      </div>
      {/* </div> */}


      <h1 className="font-bold  text-gray-800   my-2 ">Student id  </h1>
      <input required onChange={(e) => setAge(e.target.value)} value={age} placeholder='Enter Your id  ' type="text" className=' my-2 border border-black  bg-white border-gray-200 cursor-pointer w-full p-2 rounded-md ' />
      <h1 className="font-bold  text-gray-800 my-2  ">Birth </h1>
      <input required onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your birth date  ' type="Date" className=' my-2 border border-black  bg-white border-gray-200 cursor-pointer w-full p-2 rounded-md ' />
      <h1 className="font-bold  text-gray-800 my-2 ">Gender</h1>
      {/* <input required onChange={(e) => setPhone(e.target.value)} value={phone} placeholder=' '   className='  my-2 border border-gray-200 cursor-pointer w-full p-2 rounded-md ' /> */}
      <select onChange={(e) => setGender(e.target.value)} value={gender} className=" rounded-md p-2 w-full bg-white " name="" id="">
        <option value="Gender ">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option></select>
      <button className='bg-black hover:bg-gray-900 cursor-pointer my-4 w-full  p-2 text-white text-lg font-bold rounded-md '>Create Pass  </button>

    </form>



  )
}

export default Form
