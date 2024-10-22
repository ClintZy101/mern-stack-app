import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'


function App() {
  return (
   <Box minH="100vh">
    <Navbar />
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/createpage" element={<CreatePage />} />
    </Routes>
   </Box>
  )
}

export default App
