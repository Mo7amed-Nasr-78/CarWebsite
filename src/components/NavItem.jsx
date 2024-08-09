import React from "react";
import "../styles/NavList.css";
import { motion } from "framer-motion";
import { navItems } from "../data";

function NavList({ show }) {

    return (
        <ul className={`nav_list ${show? 'visible': ''}`}>
            {navItems.map(({ title, link, icon }, idx) => {
                return (
                    <motion.li
                        className="nav_item"
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring" }}
                    >
                        <a href={link} className="nav_link">
                            {title} {show && icon}
                        </a>
                    </motion.li>
                );
            })}
        </ul>
    );
}

export default NavList;
