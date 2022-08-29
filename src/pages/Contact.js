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
                >Get in connection!</motion.h1>

                <motion.form
                    transition={{ delay: .25 }}
                    initial='hidden'
                    animate='visible'
                    variants={form} action="" method='post'>
                    <label>Your name<span>*</span></label>
                    <input spellCheck={spellCheck} type="text" placeholder='You can write your name in here...' required />

                    <label>E-mail address<span>*</span></label>
                    <input spellCheck={spellCheck} type="text" placeholder='Your e-mail address will goes here...' required />

                    <label>Phone number</label>
                    <input spellCheck={spellCheck} type="text" placeholder="It's not necessary if you don't want to..." />

                    <label>Message<span>*</span></label>
                    <textarea spellCheck={spellCheck} placeholder='And your message...' required></textarea>

                    <button>SEND IT!</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
