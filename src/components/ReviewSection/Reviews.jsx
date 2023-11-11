import React from 'react'
import { FaHiking } from 'react-icons/fa';

function Reviews() {
    return (
        <div className='review_Section'>
            <div className='text_container'>
                <div className='review_text'>
                    <p>“Tiago put together an epic itinerary for me
                        and my friends. He showed us some hidden
                        hiking trails and amazing local food spots.
                        He even met us for a coffee to make sure we
                        had everything we needed.</p>
                        <p>Thanks Tiago!”</p>
                        <span>Charlie, rappelling down a 370-foot waterfall</span>
                        <span>The Azores</span>
                </div>
                <div className='local_expert'>
                    <FaHiking/>
                    <div>
                        <span>Trip crafted by</span>
                        <div>
                            <p>Tiago</p>
                            <p>Local expert in Portugal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Reviews