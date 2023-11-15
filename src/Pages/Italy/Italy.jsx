import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Footer from '../../components/Footer/Footer'
import WhyUsGuidance from '../../components/WhyUS/WhyUsGuidance'
import { Reasons2, AvailableTrips, Attractions } from '../../utils/data'
import './Italy.css'
import VideoPlace from '../../components/VideoPlace/VideoPlace'
import Italy_img from '../../../public/Assets/Italy_placeholder.png'
import Italyy_img from '../../../public/Assets/Italy_img.png'
import Blog_img2 from '../../../public/Assets/Blog_img2.png'
import { statisticss } from '../../utils/data'
import Reviews from '../../components/ReviewSection/Reviews'
import { AiFillStar } from 'react-icons/ai'
import CardItem from '../../components/Card/CardItem'
import CardItem2 from '../../components/Card/CardItem2'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

function Italy() {
    const stars = Array(5).fill(<AiFillStar />);
    const coloredStars = stars.map((star, index) => {
        const color = index < 4 ? '#4A21EF' : 'transparent';

        return React.cloneElement(star, { key: index, style: { color } });
    });
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

            <CardItem title='Available trips' trips={AvailableTrips} />
            <Map />
            <CardItem2 title='Must-see attractions for your itinerary' tripss={Attractions} />
            <Reviews text='We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome.'
                text1='Vivian Lim'
                text2={coloredStars}
                text3='18 June 2024'
                backgroundImage={Italyy_img}
            />

            <WhyUsGuidance title="Expert guidance to help you plan your trip"
                reasons={Reasons2} />
            <BlueSection />
            <JoinUsSection />
            <Footer />
        </>
    )
}

export default Italy


export function Map() {
    return (
        <div className='map_section'>
            <div className='map_header'>
                <div className='map_header_wrapper'>
                    <h2>Tops things to do</h2>
                    <div className='left_right'>
                        <MdKeyboardArrowLeft className='lr_icon' />
                        <MdKeyboardArrowRight className='lr_icon' />
                    </div>
                </div>
            </div>

            <div className='thing'>
                <img src={Blog_img2} alt="italyImage" />
                <div className='thing__content'>
                    <h4>Have the drive of your life on the cliff roads of the AAmalfi Coast</h4>
                </div>
            </div>
        </div>
    )
}