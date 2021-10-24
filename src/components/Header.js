import React from 'react'
import Typed from 'react-typed'


const Header = () => {
    return (
        <div className="header-wraper" id="header">

            <div className="devPic mt-5 ">
                <div className="milulImg"> </div>
            </div>

            <div className="main-info">
                <div className="main-info-wrapper">
                    <h1>Hi,</h1>
                    <h1>I'm Milad,</h1>
                    <Typed
                        className="typed"
                        strings={['Programmer', 'E-commerce', 'Business Website', 'Portfolio', ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
