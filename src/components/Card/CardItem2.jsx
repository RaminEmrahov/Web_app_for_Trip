import React from 'react'
import './cardItem.css'

function CardItem2({ title, tripss }) {
    return (
        <div className='cards_section'>
            <div className='cardList'>
                <h1>{title}</h1>
                <div className='cardss'>
                    {tripss.map((card, index) => (
                        <div key={index} className='cardItem'>
                            <img src={card.image} alt="tripImage" />
                            <div className='card__content'>
                                <div className='upper__text'>
                                    <span className='places'>{card.country}</span>
                                </div>
                                <div className='button__text'>
                                    <p className='description_text'>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardItem2;