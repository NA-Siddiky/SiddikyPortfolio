import React from 'react';
import './Contact.css'
import qr from '../../../images/QR-PNG.png'

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="container">
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
                    <form className="from">
                        <label> Name*</label>
                        <input type="text" />
                        <label> Email address*</label>
                        <input type="text" />
                        <label> Phone*</label>
                        <input type="text" />
                        <label> Message*</label>
                        <textarea></textarea>
                        <input type="submit" value="connect ME" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;