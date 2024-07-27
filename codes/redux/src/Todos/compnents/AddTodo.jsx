import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Slice/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handelSubmit = (e) => {
        e.preventDefault() 
        if(input === "") return; 
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <>
    <h2>Add Todo</h2>
    <form className='form-group d-flex justify-content-between align-items-center gap-3 my-3 w-100' onSubmit={handelSubmit}>
        <input placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} className='form-control' type="text" />
        <button type="submit" className='btn btn-primary'>Add</button>
    </form>
    </>
  )
}

export default AddTodo
