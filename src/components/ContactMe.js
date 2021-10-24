import React from 'react'
import emailjs from "emailjs-com"



const ContactMe = () => {

    const serviceID = "service_ID"
    const templateID = "template_ID"
    const userID = "user_NSc4GksW0YJIz5b8kAWMQ"
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    return (

        <div className="general-wrapper" id="contactme">

            <div className="container">
                <div>
                    <h3 className="headlineh3">Contact Me</h3>
                </div>
            </div>

            <div className="container">
                <p className="text-center">Please fill out the form and describe your needs. I'll contact you as soon as possible.</p>
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 contact">

                        
                        <div className="text-center">
                            <input className="form-control" type="text"
                             placeholder="Name" 
                             name="name" required/>
                            <div className="line"></div>
                        </div>

                        <div className="text-center">
                            <input className="form-control" type="email"
                             placeholder="Email" name="email" required/>
                            <div className="line"></div>
                        </div>

                        <div className="text-center">
                            <input className="form-control" type="text" 
                            placeholder="Phone Number" name="phone" required/>
                            <div className="line"></div>
                        </div>

                        <div className="text-center">
                            <input className="form-control" type="text" 
                            placeholder="Subject" name="subject" required />
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 contact">
                        <div className="text-center">
                            <textarea className="form-control" 
                            placeholder="Please describe your needs shortly..."  
                            name="description" required></textarea>
                            <div className="line"></div>
                        </div>
                        <button type="button" type="submit">Submit</button>
                    </div>

                </div>
                </form>
            </div>

        </div>
    )
}

export default ContactMe
