import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoByUser } from '../Todos/Slice/todoSlice'

const Users = () => {

    const users = useSelector(state=>state.entitties.users.users)
    const dispatch = useDispatch()
  return (
    <>
    <div className='w-50 d-flex align-items-center flex-column justify-content-center'>
      <h2>Users</h2>
      <ul className='list-group w-100 mt-3'>
        {users?.map((user) => (
          <li key={user.id} className='list-group-item d-flex align-items-center w-100  justify-content-between'>
            {user.name}
            <div className='d-flex align-items-center justify-content-center w-50  gap-2'>
            <input placeholder='Enter Todo id to assign' type="text" className='form-control ' />
            <button onClick={() => dispatch(todoByUser(user.id))} className='btn btn-outline-danger'>ASS</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Users
