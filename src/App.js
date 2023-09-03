import React from 'react'
// STYLES
import './App.css'

//REACT ROUTER 
import { Route, Routes } from 'react-router-dom'

//MATERIAL UI COMPONENTS
import { Box } from '@mui/material';

//PAGES
import { ExerciseDetails, Home } from './pages';

//INTERNAL COMPONENTS
import { Navbar, Footer } from './components';

const App = () => {
  return (

    <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App