import React from 'react'
import Hero from './hero'
import BestSeller from './best-seller'
import Collection from './collection'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Collection />
    </div>
  )
}

export default Home
