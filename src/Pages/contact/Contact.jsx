import React from 'react'
import ImagePlace from '../../components/ImagePlace/ImagePlace'
import './Contact.css'
import { contact, contactInfoData } from '../../utils/data'
import BlueSection from '../../components/BlueSection/BlueSection'
import JoinUsSection from '../../components/JoinUsSection/JoinUsSection'
import Contact_img from '../../../public/Assets/Contact_img.png'
import Layout from '../../components/Layout'

const ContactInfo = () => {
    return (
        <Layout>
            <ImagePlace text='Contact us' description='Your Journey Begins with a Conversation - Reach Out to Us Today!' backgroundImage={Contact_img} />
            <div className='contact_section'>
                <div className="contact-info-container">
                    <div className='left_contact'>
                        <h2>Commercial Contacts</h2>
                        {contactInfoData.map((info, index) => (
                            <div className="contact-section" key={index}>
                                <p>{info.text}</p>
                                <a href={`mailto:${info.email}`}>{info.email}</a>
                            </div>
                        ))}
                    </div>

                    <div className='right_contact'>
                        {contact.map((info, index) => (
                            <div className="contact-section right" key={index}>
                                <h2>{info.title}</h2>
                                <p>{info.text}</p>
                                <a href={`mailto:+${info.email}`}>{info.email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BlueSection />
            <JoinUsSection />
        </Layout>
    );
};

export default ContactInfo;