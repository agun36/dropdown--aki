import React from 'react'
import desktop from '../assets/images/image-hero-desktop.png'
import client from '../assets/images/client-audiophile.svg'
import client2 from '../assets/images/client-databiz.svg'
import client3 from '../assets/images/client-maker.svg'
import client4 from '../assets/images/client-meet.svg'

const Hero = () => {
  return (
    <section className='banner container'>
      <div className='banner-container_text'>
        <h1 className='title'>
          Make <br className='subTest' /> remote work
        </h1>

        <p className='hero-text'>
          Get your team in sync, no matter your location,Streamline processes,
          create team rituals, and watch productivity soar
        </p>

        <div className='hero-btn'>
          <button className='banner-btn'>Learn more</button>
        </div>
        <div className='clients'>
          <img src={client} alt='' className='audio-file' />
          <img src={client2} alt='' />
          <img src={client3} alt='' />
          <img src={client4} alt='' />
        </div>
      </div>
      <div className='banner-img-container'>
        <img src={desktop} alt='' />
      </div>
    </section>
  )
}

export default Hero
