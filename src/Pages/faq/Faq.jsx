import React, { useState } from 'react';
import { questions } from '../../utils/data';
import ImagePlace from '../../components/ImagePlace/ImagePlace';
import './Faq.css';
import Faq_img from '../../../public/Assets/Faq_img.png'
import Layout from '../../components/Layout';

function Faq() {
    return (
        <Layout>
            <ImagePlace text='FAQ' description='Unlocking the Mysteries of Travel: Your Questions, Our Journey.' backgroundImage={Faq_img} />
            <div className='faq_section'>
                <div className='faq_wrapper' >
                    {questions.map((question, i) => (
                        <FaqItem key={i} num={i} title={question.title} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Faq;



export const FaqItem = ({ title, num }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className='surface'>
            <ul className='list'>
                <p className='question'>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <div className='content'>
                    <li>{title}</li>
                    <button className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
                        +
                    </button>
                </div>
            </ul>
            {isExpanded && (
                <div className='expansion_text'>
                    <p>
                        To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.
                    </p>
                </div>
            )}
        </div>
    );
};