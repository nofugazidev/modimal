import React from 'react'
import Hero from './hero'
import BestSeller from './best-seller'
import Collection from './collection'
import ModiWeek from './modiweek'
import Sustain from './sustain'
import Showcase from './showcase'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Collection />
      <ModiWeek />
      <Sustain />
      <Showcase />
    </div>
  )
}

export default Home
