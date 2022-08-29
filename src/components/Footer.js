import React from 'react';
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <Instagram />
                <Twitter />
                <Facebook />
                <LinkedIn />
            </div>

            <p>2022 &copy; Front-end/Webfejlesztők</p>
        </div>
    )
}

export default Footer;
