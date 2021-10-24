import React from 'react'

const Experience = () => {
    return (
        <div className="general-wrapper" id="experience">
            <div className="container">
                <h3 className="headlineh3">Experience</h3>


                <div className="experience-wrapper">
                    <div className="timeline-block timeline-block-right ">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2020-Present</h3>
                            <p>
                                <h4>Freelance Web developer</h4>
                                <ul>
                                    <li> UI Desiging and developing web applications on a freelance basis.</li>
                                    <li>Working on a Full Stack Application for private companies by
                                        Node.js, React.js, and MongoDB.</li>
                                </ul></p>
                        </div>
                    </div>
                    {/* \ */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2017-2018/Part Time</h3>
                            <p>
                                <h4>Delingish School</h4>
                                <h5>English Teacher</h5>
                                <ul>
                                    <li>Teaching beginner and Intermediate level</li>
                                    <li>TOEFL Techniques Teacher</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    {/* \ */}
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2013 – 2017</h3>
                            <p>
                                <h4>Institute of Eco Design Idea</h4>
                                <h5>First-line manager</h5>
                                <ul>
                                    <li>Defining project requirements, scope and objectives.</li>
                                    <li>Setting goals and developing operational plans.</li>
                                    <li>Monitoring, analyzing project’s data.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
