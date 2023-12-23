import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LoadingContextProvider } from './Context/LoadingContext'

import Index from './Pages/Index'
import Profile from './Pages/Profile'

function App() {
  return (
    
    <LoadingContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </LoadingContextProvider>

  )
}

export default App
