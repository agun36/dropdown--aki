import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export const HomePage = () => {
  return (
    <main className='container'>
      <Navbar />
      <div className='main'>
        <Hero />
      </div>
    </main>
  )
}
