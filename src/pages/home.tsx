import React from 'react'
import Hero from './hero'
import BestSeller from './best-seller'
import Collection from './collection'
import ModiWeek from './modiweek'
import Sustain from './sustain'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Collection />
      <ModiWeek />
      <Sustain />
    </div>
  )
}

export default Home
