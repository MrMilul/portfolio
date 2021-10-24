import React from 'react'


//************************************************ import Images ************************************************
import html from '../assets/services/html.png'
import css from '../assets/services/css.jpg'
import bootstrap from '../assets/services/bootstrap.jpg'

import jsPic from '../assets/services/js.png'
import react from '../assets/services/react.png'
import redux from '../assets/services/redux.png'
import typescript from '../assets/services/typescript.png'

import node from "../assets/services/node.jpg"
import jango from "../assets/services/jango.png"

import mongoDb from '../assets/services/mongodb.jpg'
import mysql from '../assets/services/mysql.png'


import graphql from '../assets/services/graphql.png'
import restful from '../assets/services/restful.png'


const Services = () => {
    return (
        <div className="general-wrapper" id="services">
            <div className="container py-4">
                <div>
                    <h3 className="headlineh3">Services</h3>
                </div>
                <div className="cart-wraper">


                    <div className="cart-body ">
                        <div className="skill-p">
                            As all developers, I use The HyperText Markup Language (HTML5) as
                            standard markup language for designing the documents in your project.
                            In addition, Cascading Style Sheets(Css3) will be utilized to style and
                            layout your web pages to be totally responsive and meet your design requests.
                            Alternatively, I am able to code your styles by Bootstrap framework.
                        </div>


                        <div className="skill-img-wrapper ">
                            <img className="skill-img" src={html} alt="skill img" />
                            <img className="skill-img" src={css} alt="skill img" />
                            <img className="skill-img" src={bootstrap} alt="skill img" />
                        </div>
                    </div>



                    <div className="cart-body">
                        <div className="skill-p">
                           This is my favorite part! To add functionality I am coding your project by 
                           the most amazing programming language; Javascript(ES6).
                           I use react.js or typescript (as you wish!) for 
                           your front-end section. Meanwhile, for managing the state the Redux framework
                           will be used. 
                        </div>


                        <div className="skill-img-wrapper">
                            <img className="skill-img" src={jsPic} alt="skill img" />
                            <img className="skill-img" src={react} alt="skill img" />
                            <img className="skill-img" src={redux} alt="skill img" />
                            <img className="skill-img" src={typescript} alt="skill img" />
                        </div>
                    </div>



                    <div className="cart-body">
                        <div className="skill-p">
                           For the server side, I mainly code the projects with Node.js 
                           and Express framework. It is strongly believed that Express.js 
                           is easy to configure and customize based on your needs. And also, the other option
                           for server side is Python and Django framework.

                        </div>


                        <div className="skill-img-wrapper">
                            <img className="skill-img" src={node} alt="skill img" />
                            <img className="skill-img" src={jango} alt="skill img" />
                        </div>
                    </div>




                    <div className="cart-body">
                        <div className="skill-p">
                            For organizing collection of structured informations, I mainly use NoSQL database
                            like MoongoDb. But, storing data by SQL database is another 
                            option that you can chose for your 
                            project. 
                        </div>


                        <div className="skill-img-wrapper">
                            <img className="skill-img" src={mongoDb} alt="skill img" />
                            <img className="skill-img" src={mysql} alt="skill img" />
                        </div>
                    </div>


                    <div className="cart-body">
                        <div className="skill-p">
                            For connecting client side and server side or better to say for Application 
                            Programming Interface (API) you can choose either RESTful or GraphQl.
                        </div>


                        <div className="skill-img-wrapper">
                            <img className="skill-img" src={graphql} alt="skill img" />
                            <img className="skill-img" src={restful} alt="skill img" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services
