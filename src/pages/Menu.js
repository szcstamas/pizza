import React from 'react'
import { PizzaList } from '../components/PizzaList'
import PizzaItem from '../components/PizzaItem';
import '../styles/Menu.css';
import { motion } from 'framer-motion';

const Menu = () => {

    const menuItems = {
        hidden: { opacity: 0, transform: 'translateY(-100px)' },
        visible: { opacity: 1, transform: 'translateY(0px)' },
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='menu'>
            <div
                className="menuTitle"
                style={{ marginBottom: '1rem' }}
            >Our menu</div>
            <motion.div
                transition={{ delay: .25 }}
                variants={menuItems}
                initial='hidden'
                animate='visible'
                className="menuList">
                {PizzaList.map((pizza) => {

                    return (

                        <PizzaItem
                            name={pizza.name}
                            image={pizza.image}
                            price={pizza.price}
                        />
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Menu
