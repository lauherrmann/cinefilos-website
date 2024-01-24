import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './pages/Home/home'

function App() {

  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
