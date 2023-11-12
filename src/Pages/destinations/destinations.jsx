import React from 'react';
import VideoPlace from '../../components/VideoPlace/VideoPlace';
import Navbar from '../../components/Navbar/Navbar';
import { countriess } from '../../utils/data';
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection';
import Footer from '../../components/Footer/Footer';
import './destinations.css'
import { Link } from 'react-router-dom';

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
      <JoinUsSection />
      <Footer />

    </>
  );
}

export default Destinations;
