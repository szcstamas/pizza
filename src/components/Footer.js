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

            <p>Szűcs Tamás &copy; 2022</p>
        </div>
    )
}

export default Footer;
