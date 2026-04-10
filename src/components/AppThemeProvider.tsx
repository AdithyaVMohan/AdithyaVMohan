import {createTheme, ThemeProvider} from '@mui/material'
import React from 'react'

export default function AppThemeProvider({children}:{
  children:React.ReactNode
}) {
   const theme= createTheme({
    palette:{
      primary:{
        main:'#6200EA'
      }
    }
   })
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
