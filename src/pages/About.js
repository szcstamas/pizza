import React from 'react'
import AboutBackground from '../assets/multiplePizzas.jpeg'
import '../styles/About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='about'>

            <div className="aboutTop" style={{ backgroundImage: `url(${AboutBackground})` }} ></div>
            <div className="aboutContainer">
                <h1>About us</h1>
                <p>
                    <i>Project Pizzeria opened its doors in 2008 in the center of Budapest.</i>
                </p>
                <p>
                    We build on the recipes and traditions of Hungarian and Italian cuisine. We start preparing our food - both for local consumption and for home delivery - after placing the order, and deliver it fresh and hot, or let's serve.</p>
                <p>
                    We bake our pizzas at home, based on Italian recipes, from locally kneaded dough. The chefs prepare the selected pizza right in front of your eyes. If our ingredients allow, we can also prepare something that suits your taste.
                </p>
                <p>
                    Our most important goal is high-quality hospitality, from the preparation of quality pizza to fast home delivery, at an extremely favorable price, with a constantly renewed offer. We make our pizzas exclusively from our own, quality ingredients and based on a unique recipe. The dough does not contain eggs or dairy products. Instead of plant-based cheeses common in many places, we use high-quality Gouda cheese, which makes our pizzas even tastier. Our tomato base is also made tastier using only high-quality tomato paste and unique seasoning. Fat or Thin? The main characteristic of real Italian pizza is that the dough is always thin. It is not uncommon for the topping(s) to be thicker than the dough. Here you can find your favorite pizzas with both normal and thin dough.</p>
            </div>
        </motion.div>
    )
}

export default About
