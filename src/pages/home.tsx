import React from 'react'
import Hero from './hero'
import BestSeller from './best-seller'
import Collection from './collection'
import ModiWeek from './modiweek'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Collection />
      <ModiWeek />
    </div>
  )
}

export default Home
