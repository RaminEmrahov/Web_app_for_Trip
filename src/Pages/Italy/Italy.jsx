import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Footer from '../../components/Footer/Footer'
import WhyUsGuidance from '../../components/WhyUS/WhyUsGuidance'
import { Reasons2, statistics } from '../../utils/data'
import './Italy.css'
import VideoPlace from '../../components/VideoPlace/VideoPlace'
// import ImagePlace from '../../components/ImagePlace/ImagePlace'
import Italy_img from '../../components/Assets/Italy_placeholder.png'
import { statisticss } from '../../utils/data'

function Italy() {
    return (
        <>
            <Navbar />
            <div className='video-container'>
                <div className='video-wrapper'>
                    <img src={Italy_img} alt="" />
                </div>
                <VideoPlace
                    text='Italy'
                    description="Trips you couldn't plan, even if you wanted to."
                    btnText="Create a trip"
                    btnClassName='italy_btn'
                >
                    <div className='statistics_wrapper'>
                        {statisticss.map((statistic, index) => (
                            <div key={index} className='statistic'>
                                <span>{statistic.icon}</span>
                                <div className='each_statistic'>
                                    <h3>{statistic.title}</h3>
                                    <p>{statistic.text1}</p>
                                    <p>{statistic.text2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </VideoPlace>
            </div>

            <WhyUsGuidance title="Expert guidance to help you plan your trip"
                reasons={Reasons2} />
            <BlueSection />
            <JoinUsSection />
            <Footer />
        </>
    )
}

export default Italy