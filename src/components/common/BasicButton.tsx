import React from 'react'
import Button from '@mui/material/Button'

type PropsType = {
  title: string
  handleAction: (id: number) => void
}

const BasicButton = ({ title, handleAction }: PropsType) => {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  )
}

export default BasicButton
