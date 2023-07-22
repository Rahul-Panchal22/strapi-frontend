import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Slider from '../components/Slider'
import Catergories from '../components/Catergories'
import Products from '../components/Products'
import NewsLettter from '../components/NewsLettter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Annoucement />
        <Navbar />
        <Slider />
        <Catergories />
        <Products />
        <NewsLettter />
        <Footer />
    </div>
  )
}

export default Home