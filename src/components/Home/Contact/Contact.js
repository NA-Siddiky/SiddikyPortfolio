import React from 'react';
import './Contact.css'
import qr from '../../../images/QR-PNG.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <h2 style={{ textAlign: "left" }}>Contact Me</h2>
                                <p>Siddiky is always ready to reply. I love to communicate please feel free any query about myself and web design.</p>
                                <p>
                                    <strong>City:</strong> Kushtia<br />
                                    <strong>Bangladesh</strong><br />
                                </p>
                                <p>
                                    <strong>Email:</strong>  nasiddiky@outlook.com<br />
                                    <strong>phone:</strong>  +8801712378303
                                </p>
                                <div>
                                    <img className="d-block w-50" src={qr} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="from" onSubmit={sendEmail}>
                                <label> Name*</label>
                                <input type="text" name='name' />
                                <label> Email address*</label>
                                <input type="text" name='email' />

                                <label> Message*</label>
                                <textarea name='message'></textarea>
                                <input type="submit" value="connect ME" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;