import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Footer from '../../components/Footer/Footer'
import WhyUsGuidance from '../../components/WhyUS/WhyUsGuidance'
import { Reasons2 } from '../../utils/data'
import './Italy.css'

function Italy() {
    return (
        <>
            <Navbar />
            <WhyUsGuidance title="Expert guidance to help you plan your trip"
                reasons={Reasons2} />
            <BlueSection />
            <JoinUsSection />
            <Footer />
        </>
    )
}

export default Italy