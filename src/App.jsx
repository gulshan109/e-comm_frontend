import React from 'react'
import Ecomm from './components/Ecomm'
import { AuthProvider } from './components/context/Auth'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <AuthProvider>
        {/* <BrowserRouter>
        </BrowserRouter> */}
      <Ecomm/>
      </AuthProvider>
    </div>
  )
}

export default App
