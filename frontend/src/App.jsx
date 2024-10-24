import { Box, useColorModeValue } from '@chakra-ui/react'
import ProductsPage from './pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'



function App() {
  return (
   <Box minH="100vh" bg={useColorModeValue("white", "blackAlpha.50")}>
    <Navbar />
    <Routes>
      <Route  path="/" element={<ProductsPage />} />
      <Route  path="/createpage" element={<CreatePage />} />
    </Routes>
   </Box>
  )
}

export default App
