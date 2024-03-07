import { useRef, useState } from 'react';
import './contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y:500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pfvztl8', 'template_aqhwrrl', formRef.current, {
                publicKey: 'TsYkBPKHaKvwMREZy',
            })
            .then(
                () => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true);
                },
            );
    };

    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>ansarisadaan72@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Mumbai, India</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 7045623244</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' required name='name' />
                    <input type="email" placeholder='Email' required name='email'/>
                    <textarea rows={7} placeholder='Message' name='message' />
                    <button>Submit</button>
                    {error &&  "Error"}
                    {success && "Success"}
                </form>
            </div>
        </motion.div>
    )
}

export default Contact