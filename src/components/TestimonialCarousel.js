import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


import avatar2 from "../assets/clientsPic/avatar2.png"
import avatar3 from "../assets/clientsPic/avatar3.png"


const TestimonialCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showThumbs={false}
        >
            <>
                <h3 className="my-5 Testimonial-headlineh3">Ferreus</h3>

                <img src={avatar2} alt="avatar2" />

                <p className="my-5">In publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a document or a
                    typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available.</p>
            </>

            <>
                <h3 className="my-5 Testimonial-headlineh3">Ferreus</h3>

                <img src={avatar3} alt="avatar3" />
                <p className="my-5" >In publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a document or a
                    typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available.</p>
            </>
        </Carousel>
    )
}

export default TestimonialCarousel
