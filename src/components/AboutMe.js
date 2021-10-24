import React from 'react'

const AboutMe = () => {
    return (
        <div className="general-wrapper" id="aboutMe">
            <div className="container py-4">
                <div className="headlineh3">
                    <h3>About Me</h3>
                </div>
                <div className="mt-4">
                    <div>
                        <h4 className="font-weight-bold">Coding is Life!</h4>
                        <p>Coding is not just write a function
                            or an algorithm and then return an answer without errors!
                            Personally speaking, being a programmer is more that that.
                            I feel and live my every single code and algorithm I am working on it. </p>

                        <p>Professionally speaking, by using
                            {" "} <a href="https://en.wikipedia.org/wiki/Agile_software_development" target="_blank">Agile</a> {" "}
                            methodology I plan, design, code, evaluate, and deploy
                            your desier application.
                            Mainly, Javascript will be the main language in your project
                            for both back-end and front-end. In addition, it is possible to code the back-end of your application by
                            Python(Django). Your Database would probably be coded by No-SQL but feel free to choose SQl one either.
                            Finally, if designing, coding, and all the requirments were perfectly matched to your needs,
                            your application will be deployed on the cloud base platform. For more information about services please go to
                            the Services section.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe



// codding is not a job! it is a life!
// I feel and live my every single code and algorithm that I am working on it. Being a programmer... 