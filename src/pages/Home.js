import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/pizza.jpeg';
import '../styles/Home.css';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="homeContainer">
                <h1>Project Pizza</h1>
                <p>Pizza for every developer!</p>
                <Link to='/menu'>
                    <button>I would like to order!</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Home
