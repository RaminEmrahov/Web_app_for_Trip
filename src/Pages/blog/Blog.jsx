import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImagePlace from '../../components/ImagePlace/ImagePlace'
import './Blog.css'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Footer from '../../components/Footer/Footer'

function Blog() {
  return (
    <>
        <Navbar/>
        <ImagePlace text='Blog' description='Blog articles for "Inspiration".'/>
        
        <BlueSection/>
        <JoinUsSection/>
        <Footer/>
    </>
  )
}

export default Blog