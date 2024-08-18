import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/store'
import { logout } from './authApi'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className='flex'>
      <button
        onClick={handleLogout}
        className='bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300'
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
