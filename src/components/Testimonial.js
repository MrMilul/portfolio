import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'


const Testimonial = () => {

    return (
        <div className="general-wrapper">
            <div className="container">
                <h3 className="headlineh3">Clients</h3>
            </div>
            <div className="container">
                <div className="testemonila-content">
                    <TestimonialCarousel />
                </div>

            </div>
        </div>
    )
}

export default Testimonial
