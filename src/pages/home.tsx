import React from 'react'
import Banner from './banner'
import Hero from './hero'

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <p>this is the homepage</p>
      <Hero />
    </div>
  )
}

export default Home
