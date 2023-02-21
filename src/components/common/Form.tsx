import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import BasicButton from './BasicButton'

type PropsType = {
  title: string
  setPassword: (password: string) => void
  setEmail: (email: string) => void
  handleAction: (id: number) => void
}
function Form({ title, setPassword, setEmail, handleAction }: PropsType) {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>
      <Box
        component="form"
        sx={{
          '&> :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          type={'password'}
          label="Enter the Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <BasicButton title={title} handleAction={handleAction} />
    </div>
  )
}

export default Form
