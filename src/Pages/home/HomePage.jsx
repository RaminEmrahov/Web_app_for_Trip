import React from 'react';
import VideoPlace from '../../components/VideoPlace/VideoPlace';
import './Home.css';
import { BiSearch } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import WhyUsGuidance from '../../components/WhyUS/WhyUsGuidance';
import Expert from '../../components/LocalExpertSection/Expert';
import Reviews from '../../components/ReviewSection/Reviews';
import { Reasons } from '../../utils/data';
import BlueSection from '../../components/BlueSection/BlueSection';
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection';
import Footer from '../../components/Footer/Footer';
import Home_img from '../../components/Assets/Home_img.png'

function HomePage() {
    return (
        <>
            <Navbar />
            <div className='video-container'>
                <div className='video-wrapper'>
                    <video autoPlay loop muted className='video-background'>
                        <source src={require('../../components/Assets/Homepage.mp4')} type='video/mp4' />
                    </video>
                </div>
                <VideoPlace
                    text='We create trips you love'
                    description="Trips you couldn't plan, even if you wanted to.">
                    <div className='video-child'>
                        <input type='text' placeholder='Where do you want to go?' className='text-input' />
                        <BiSearch className='io5_icon' />
                    </div>
                </VideoPlace>
            </div>
            <WhyUsGuidance title="Why us?" reasons={Reasons} />
            <Expert />
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
                backgroundImage={Home_img}
            />
            <BlueSection />
            <JoinUsSection />
            <Footer />
        </>
    );
}

export default HomePage;
