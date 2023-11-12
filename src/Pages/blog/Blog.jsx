import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImagePlace from '../../components/ImagePlace/ImagePlace'
// import './Blog.css'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Footer from '../../components/Footer/Footer'
import Blogg from '../../components/Assets/Blog_img.png'

function Blog() {
  return (
    <>
        <Navbar/>
        <ImagePlace text='Blog' description='Blog articles for "Inspiration".' backgroundImage={Blogg}/>
    
        <BlueSection/>
        <JoinUsSection/>
        <Footer/>
    </>
  )
}

export default Blog