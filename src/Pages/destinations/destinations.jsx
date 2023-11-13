import React from 'react';
import VideoPlace from '../../components/VideoPlace/VideoPlace';
import Navbar from '../../components/Navbar/Navbar';
import { Top_Destinations, countriess } from '../../utils/data';
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection';
import Footer from '../../components/Footer/Footer';
import './destinations.css'
import { Link } from 'react-router-dom';
import Reviews from '../../components/ReviewSection/Reviews';
import Destination_img from '../../components/Assets/Destination_img.png'
import CardItem from '../../components/Card/CardItem';

function Destinations() {
  return (
    <>
      <Navbar />
      <div className='video-container'>
        <div className='video-wrapper'>
          <video autoPlay loop muted className='video-background'>
            <source src={require('../../components/Assets/Destinations.mp4')} type='video/mp4' />
          </video>
        </div>
        <VideoPlace
          text='Explore places on Tourista'
          description="Destinations" />
      </div>

      <section className='destination_Section'>
        <div className='destination_Wrapper'>
          {countriess.map((continentObj, index) => (
            <div key={index} className='country_wrapper'>
              <h2>{Object.keys(continentObj)[0]}</h2>
              <ul>
                {continentObj[Object.keys(continentObj)[0]].map((country, index) => (
                  <Link to='/Italy'><li key={index}>{country}</li></Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CardItem title='Top Destinations' trips={Top_Destinations} />

      <Reviews text='“Tiago put together an epic itinerary for me and my friends. He showed us some hidden
                            hiking trails and amazing local food spots.
                            He even met us for a coffee to make sure we
                            had everything we needed.'
        strong_text='Thanks Tiago!”'
        testimonial_info='Charlie, rappelling down a 370-foot waterfall'
        region_name='The Azores'
        text1='Trip crafted by'
        text2='Tiago'
        text3='Local expert in Portugal'
        backgroundImage={Destination_img}
      />
      <JoinUsSection />
      <Footer />

    </>
  );
}

export default Destinations;
