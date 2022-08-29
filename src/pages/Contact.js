import React from 'react'
import '../styles/Contact.css';
import contactBackground from '../assets/pizzaLeft.jpg'
import { motion } from 'framer-motion';

const Contact = () => {

    const form = {
        hidden: { opacity: 0, transform: 'translateY(100px)' },
        visible: { opacity: 1, transform: 'translateY(0px)' },
    }
    const formHeader = {
        hidden: { opacity: 0, transform: 'translateY(-100px)' },
        visible: { opacity: 1, transform: 'translateY(0px)' },
    }

    const spellCheck = 'false';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='contact'>
            <div className="contact-left" style={{ backgroundImage: `url(${contactBackground})` }} ></div>
            <div className="contact-right">
                <motion.h1
                    variants={formHeader}
                    initial='hidden'
                    animate='visible'
                >Kapcsolat</motion.h1>

                <motion.form
                    transition={{ delay: .25 }}
                    initial='hidden'
                    animate='visible'
                    variants={form} action="" method='post'>
                    <label>Teljes név <span>*</span></label>
                    <input spellCheck={spellCheck} type="text" placeholder='Add meg a teljes nevedet..' required />

                    <label>E-mail cím <span>*</span></label>
                    <input spellCheck={spellCheck} type="text" placeholder='Add meg az e-mail címedet..' required />

                    <label>Telefonszám</label>
                    <input spellCheck={spellCheck} type="text" placeholder='Add meg a telefonszámodat..' />

                    <label>Üzenet <span>*</span></label>
                    <textarea spellCheck={spellCheck} placeholder='Az üzenet...' required></textarea>

                    <button>Elküldöm!</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
