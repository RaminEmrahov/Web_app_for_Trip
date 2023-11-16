import React from 'react'
import ImagePlace from '../../components/ImagePlace/ImagePlace'
import './About.css'
import WhyUsGuidance from '../../components/WhyUS/WhyUsGuidance'
import Expert from '../../components/LocalExpertSection/Expert'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import About_img from '../../../public/Assets/About_img.png'
import { Reasons } from '../../utils/data'
import Layout from '../../components/Layout'

function About() {
  return (
    <Layout>
      <ImagePlace text='About Us' description='Discover Our Passion for Travel and Adventure.' backgroundImage={About_img} />
      <div className='About_section'>
        <div className='About_container'>
          <h1>Changing how the world travels</h1>
          <p>We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination. With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.</p>
        </div>
      </div>
      <WhyUsGuidance title="Why us?" reasons={Reasons} />
      <Expert />
      <BlueSection />
      <JoinUsSection />
    </Layout>
  )
}

export default About