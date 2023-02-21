import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router'
// import { app } from './utils/firebase-config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { FirebaseConfig } from './utils'
import { Home } from './Pages'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    FirebaseConfig.init()

    handleExistingAuthToken()
  }, [])

  const handleExistingAuthToken = () => {
    const authToken = sessionStorage.getItem('AuthToken')
    if (authToken) {
      navigate('/home')
      return
    }
  }

  const handleLogin = () => {
    const authentication = getAuth()
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        const refreshToken = response._tokenResponse.refreshToken
        sessionStorage.setItem('AuthToken', refreshToken)
        navigate('/home')
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          toast.error('Please check the Password')
          return
        }
        if (error.code === 'auth/user-not-found') {
          toast.error('Please check the Email')
          return
        }

        toast.error('Try again later!')
      })
  }

  const handleRegister = () => {
    const authentication = getAuth()

    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        const refreshToken = response._tokenResponse.refreshToken
        sessionStorage.setItem('AuthToken', refreshToken)
        navigate('/home')

        console.log(`register `, { response, refreshToken })
      })
      .catch((error) => {
        console.log(`register error`, { error })

        switch (error.code) {
          case 'auth/email-already-in-use': {
            toast.error('Email Already in Use')
            break
          }
          case 'auth/invalid-email': {
            toast.error('Email is invalid format')
            break
          }
          case 'auth/weak-password': {
            toast.error('Password shoud be at least 6 characters')
            break
          }

          default: {
            toast.error('Try again later!')
          }
        }
      })
  }
  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                // handleAction={() => handleAction(1)}
                handleAction={handleLogin}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                // handleAction={() => handleAction(2)}
                handleAction={handleRegister}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </div>
  )
}

export default App
