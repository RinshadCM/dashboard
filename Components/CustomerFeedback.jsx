import React from 'react'
import { Constants } from '../Common/constants';
import { FaStar } from "react-icons/fa";

const CustomerFeedback = () => {

    const stars = Array(5).fill(false);

    return (
        <div className='rounded px-3 py-md-3  reviewOuter ms-md-3 mt-4 mt-md-0' style={{ backgroundColor: "#292A31" ,overflowY:"auto", height:"410px"}}>
            <h4 className="text-light mb-4">Customer's Feedback</h4>
            {
                Constants.reviews.map((item, index) => (
                    <div key={index} className='mb-3 text-white review'>
                        <span className='d-flex gap-2'><span className='profile-img-table'></span> {item.name}</span>
                        <div>
                            {stars.map((_, ind) => (
                                <span key={ind} style={item.star-1 >= ind ? {color:"yellow"} : {}}><FaStar/></span>
                            ))}
                        </div>
                        <p style={{fontSize:"11px"}}>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomerFeedback