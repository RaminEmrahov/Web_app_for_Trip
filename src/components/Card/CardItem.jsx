import React from 'react'
import { FiBookmark } from 'react-icons/fi'
import './cardItem.css'

function CardItem({ title, trips }) {
    return (
        <div className='cards_section'>

            <div className='cardList'>
                <h1>{title}</h1>
                <div className='cards'>
                    {trips.map((card, index) => (
                        <div key={index} className='cardItem'>
                            <img src={card.image} alt="tripImage" />
                            <FiBookmark className='car__bookmark' />
                            <div className='card__content'>
                                <div className='upper__text'>
                                    <span className='tripCountry'>{card.country}</span>
                                    <h3 className='tripCity'>{card.city}</h3>
                                </div>
                                <div className='button__text'>
                                    <span className='tripTime'>{card.time ? card.item : card.plans}</span>
                                    <div>
                                        <p>From</p>
                                        <p className='tripPrice'>{card.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardItem
