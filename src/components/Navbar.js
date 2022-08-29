import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder'
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>

            <div className="navbar-right">
                <Link to='/'>Homepage</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button><ReorderIcon /></button>
            </div>

        </div>
    )
}

export default Navbar
