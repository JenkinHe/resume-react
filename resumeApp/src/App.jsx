import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import Education from './pages/Education'
import SoftSkills from './pages/SoftSkills'
import TechnicalSkills from './pages/TechnicalSkills'
import WorkHistory from './pages/WorkHistory'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div >
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/education' element={<Education/>}/>
        <Route exact path='/hobbies' element={<Hobbies/>}/>
        <Route exact path='/soft-skills' element={<SoftSkills/>}/>
        <Route exact path='/technical-skills' element={<TechnicalSkills/>}/>
        <Route exact path='/work-history' element={<WorkHistory/>}/>

        <Route exact path='*' element={<div>NOT FOUND!!!!</div>}/>
      </Routes>
      
    </div>
      
    </>
  )
}

export default App
