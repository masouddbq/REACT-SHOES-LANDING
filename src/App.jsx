import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import CardList from './Components/CardList/CardList'
import {Route , Routes} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import WomenShoes from './Components/WomenShoes/WomenShoes'
import Sport from './Components/Sport/Sport'
import Sports from './Components/Sports/Sports'
import Hiking from './Components/Hiking/Hiking'
import NotFound from './Components/NotFound/NotFound'


function App() {

  return (
    <>
    {/* <Navbar />
    <Hero />
    <CardList /> */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/women' element={<WomenShoes />} />
      <Route path='/sport' element={<Sport />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/hiking' element={<Hiking />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
