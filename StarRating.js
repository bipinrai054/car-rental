import React from 'react'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div className='main'>
        {
         [...Array(5)]
            .map( (star,i) => 
                    {    
                        const ratingValue = i + 1;   
                        return ( 
                            <label>
                                <input 
                                    type="radio" 
                                    name='rating' 
                                    value={ratingValue} 
                                    onClick = { () => setRating(ratingValue)}
                                />
                                <FaStar size={100}  
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                                onMouseEnter = { () => setHover(ratingValue) }
                                onMouseLeave = { () => setHover(null) } 
                                />
                            </label>
                        )
                    } 
                )
        }
        </div>
    )   
}

export default StarRating