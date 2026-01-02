import './Footer.css';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import {FooterDescription} from './FooterDynamicContent';

function Footer() {
    let CurrentYear = new Date().getFullYear();
    return (
        <>
            <div id="footer" className="footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <p>{FooterDescription.FooterContent}</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-email">
                            <input type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="footer-subscriber">
                            Subscribe
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom-left">© {CurrentYear} Parthiban. All Rights Reserved.</p>
                    <div className="footer-bottom-right">
                        <p><FaGithub size={24} color="#ecf0f1"  />&nbsp;<a href="https://github.com/Parthiban-2003">Git Hub</a></p>
                        <p><FaLinkedin size={24} color="#ecf0f1" />&nbsp; <a href="www.linkedin.com/in/parthiban25325290">LinkedIn</a></p>
                        <p> <FaGoogle size={24} color="#ecf0f1" />&nbsp; <a href="webtechky4@gmail.com">Gmail</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
