import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaTwitter, FaLinkedin } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <p class="text-justify">I am here to help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><>Programing Language</></li>
                            <li><>Front End</></li>
                            <li><>Back End</></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><>About Me</></li>
                            <li><>Contact Me</></li>
                            <li><>Contribute</></li>
                            <li><>Privacy Policy</></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by N.A Siddiky.
                       </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i className="FaFacebook"></i></a></li>
                            <li><a class="twitter" href="#"><i className="FaTwitter"></i></a></li>
                            <li><a class="linkedin" href="#"><i className="FaLinkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;