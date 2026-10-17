import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/agence' element={<Agence />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>


    </div>
  )
}

export default App