import React from 'react'
import About from './About'
import Items from './Items'
import CarouselProg from './Carousel'
import Info from './Info'
import Response from './Response'

const Home = () => {
  return (
    <div>
        <CarouselProg />
        <About />
        <Info />
        <Items />
        <Response />
    </div>
  )
}

export default Home