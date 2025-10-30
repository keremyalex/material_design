import React from 'react'
import ThemeProvider from './mui/ThemeProvider'
import Demo from './Demo'

function App() {
  return (
    <ThemeProvider>
      <Demo />
    </ThemeProvider>
  )
}

export default App
