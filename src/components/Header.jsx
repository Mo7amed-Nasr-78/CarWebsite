import React, { useState } from 'react';
import NavList from './NavItem';
import '../styles/Header.css';
import { motion } from 'framer-motion';

function Header() {

    const [ visible, setVisible ] = useState(false);
    
    function clickHandle() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        <header>
            <motion.div className="container"
                initial={{ y: -500, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{  delay: 1.2, duration: 0.5, type: 'spring', damping: 12 }}
            >
                <div className="logo">
                    <h1><span>c</span>ars<span>.</span></h1>
                </div>
                <NavList show={visible}/>
                <motion.button 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, background: '#ffffff', color: '#014ec1', transition: { duration: 0.5, type: 'spring', damping: 10 } }}
                    className={`header_btn`}>
                    see deals
                </motion.button>
                <div className={`menu_icon`} onClick={clickHandle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </motion.div>
        </header>
    )
}

export default Header;