import React from 'react'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icon">
                <img src="https://i.ibb.co/mF8SFS5/Sharp-removebg-preview.png" alt=""/>
                <h4>The Best Way You Can Predict The Future Is Create It. </h4>
            </div>
            <div className="footer__options">
                <div className="footer__option">
                    <GitHubIcon/>
                </div>
                <div className="footer__option">
                    <LinkedInIcon/>
                </div>
            </div>
            <div className="footer__copyright">
                © Kaustuv Karki
            </div>
        </div>
    )
}

export default Footer
