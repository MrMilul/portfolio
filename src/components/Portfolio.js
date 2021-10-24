import React from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"



import ecommerce from '../assets/portfolio/ecommerce.jpg'
import weblog from '../assets/portfolio/weblog.jpg'
import calculator from '../assets/portfolio/calculator.jpg'
import jobboard from '../assets/portfolio/jobboard.jpg'
import hsl from '../assets/portfolio/hsl.jpg'

import logo from "../assets/logo.jpeg"
import portfolioPic from '../assets/headerBackgroung.jpeg'





const Portfolio = () => {

    const theFirstBox = () => {
        const content = (
            <div className="popup-wrapper">
                <img className="portfolio-image-popbox" src={logo} alt="first pupup" />
                <p className="portfolio-popup-p">Building an E-commerce by node.js as back-end and used react.js as
                    front-end. Redux is used for managing the application state</p>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Ecommerce-nodejs-reactjs-redux")}>
                    https://github.com/MrMilul/Ecommerce-nodejs-reactjs-redux</a>
            </div>
        )

        PopupboxManager.open({ content })
    }
    const theSecondBox = () => {
        const content = (
            <div className="popup-wrapper">
                <img className="portfolio-image-popbox" src={logo} alt="first pupup" />
                <p className="portfolio-popup-p">In this project a weblog is created by Node.js as server, and MongoDb is used for database.The client side is coded by react.js. Customise UI design is coded by Css and used Bootstrap as well. Quill Editor is utilized as weblog text editor.
                    Moreover, react-google-login packege is used for login process.
                    <br /> And aslo in the second link you can find weblog is coded by Django and react.js
                </p>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Weblog")}>
                    https://github.com/MrMilul/Weblog</a>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Django-React-Weblog")}>
                    https://github.com/MrMilul/Django-React-Weblog</a>
            </div>
        )

        PopupboxManager.open({ content })
    }

    const theThirdBox = () => {
        const content = (
            <div className="popup-wrapper">
                <img className="portfolio-image-popbox" src={logo} alt="first pupup" />
                <p className="portfolio-popup-p">A sample of combination of HTML, Css and Java script(jQuery)
                    to make a simple calculator
                </p>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Calculator-HTML-Css-JS")}>
                    https://github.com/MrMilul/Calculator-HTML-Css-JS</a>

            </div>
        )

        PopupboxManager.open({ content })
    }

    const theForthBox = () => {
        const content = (
            <div className="popup-wrapper">
                <img className="portfolio-image-popbox" src={logo} alt="first pupup" />
                <p className="portfolio-popup-p">Creating a job board application by Django.
                </p>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Job-board")}>
                    https://github.com/MrMilul/Job-board</a>

            </div>
        )

        PopupboxManager.open({ content })
    }


    const theFifthBox = () => {
        const content = (
            <div className="popup-wrapper">
                <img className="portfolio-image-popbox" src={logo} alt="first pupup" />
                <p className="portfolio-popup-p">
                    In this project, I used the below technologies inorder to get two location and find the
                    best Itinerary planing.
                    <ul>
                        <li>react.js(Hooks, react-router-dom)</li>
                        <li>redux(redux, redux-thunk, react-redux)</li>
                        <li>Css and Bootstap</li>
                        <li>GraphQl and RESTful APIs</li>
                    </ul>

                </p>
                <b>GitHub:</b> <a className="hyper-link"
                    onClick={() => window.open("https://github.com/MrMilul/Trail-Project")}>
                    https://github.com/MrMilul/Trail-Project</a>

            </div>
        )

        PopupboxManager.open({ content })
    }
    const pupboxCongigFirst = {
        titleBar: {
            enable: true,
            text: "first project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }




    return (
        <div className="general-wrapper" id="portfolio">
            <div className="container">
                <h3 className="headlineh3" >Portfolio</h3>

            </div>
            <div className="container portfolio-wrapper">



                <div className="portfolio-pic-wrapper" onClick={theFirstBox}>
                    <img className="portfolio-image" src={ecommerce} alt='' />
                    <div className="profile-image-cover"></div>
                </div>

                {/*  */}
                <div className="portfolio-pic-wrapper" onClick={theSecondBox}>
                    <img className="portfolio-image" src={weblog} alt='' />
                    <div className="profile-image-cover"></div>

                </div>

                {/*  */}
                <div className="portfolio-pic-wrapper" onClick={theThirdBox}>
                    <img className="portfolio-image" src={calculator} alt='' />
                    <div className="profile-image-cover"></div>

                </div>

                {/*  */}
                <div className="portfolio-pic-wrapper" onClick={theForthBox}>
                    <img className="portfolio-image" src={jobboard} alt='' />
                    <div className="profile-image-cover"></div>

                </div>
                {/*  */}
                <div className="portfolio-pic-wrapper" onClick={theFifthBox}>
                    <img className="portfolio-image" src={hsl} alt='' />
                    <div className="profile-image-cover"></div>

                </div>

            </div>
            <PopupboxContainer {...pupboxCongigFirst} />
        </div>
    )
}

export default Portfolio
