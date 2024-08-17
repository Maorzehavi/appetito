import React from 'react'
import { useAppDispatch } from '../store/store'
import { logout } from '../features/auth/authApi'
import { useNavigate } from 'react-router-dom'


function Admin() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <div>Admin
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Admin