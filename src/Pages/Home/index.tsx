import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = sessionStorage.getItem('AuthToken')
    if (authToken) {
      navigate('/home')
      return
    }

    navigate('/register')
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('AuthToken')
    navigate('/login')
  }
  return (
    <div>
      Home
      <Button variant="contained" onClick={handleLogout}>
        {'Logout'}
      </Button>
    </div>
  )
}

export default Home
