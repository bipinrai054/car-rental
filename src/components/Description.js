import React from 'react'
import './Description.css'

function Description() {    
    return (
        <div className='main'>
                <div className='imgbox'>
                    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lamborghini-aventador-svj-roadster-drive-107-1576871367.jpg?crop=0.825xw:0.620xh;0.138xw,0.329xh&resize=1200:*' alt='img'/>
                </div>
                <div className='content'>
                        <h3>Lamborghini</h3>
                        <p>Price: $500,000</p>
                        <p>lorem ipsum Lorem Ipsum is simply dummy text. Lorem Ipsum has been the printing and typesetting industry’s standard dummy text ever since the 16th century, when an unknown printer took a galley of type and scrambled it to make a type sample book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Its use infiltrates every discipline where the inclusion of dummy text is useful </p>
                        <button>Book Now</button>
                </div>
        </div>
    )
}

export default Description
