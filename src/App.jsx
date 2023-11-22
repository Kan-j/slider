import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './Carousel'
import list from './data'

function App() {
  return (
    <>
    <section>
      <Carousel list={list} />
    </section>
      
    </>
  )
}

export default App
