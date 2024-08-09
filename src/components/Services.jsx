import React from "react";
import "../styles/Services.css";
import { serviceCards } from "../data";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

function Services() {

    return (
        <Element className="services" id="services">
            <div className="container">
                <motion.div
                    className="serv_text"
                >
                    <motion.h2 className="mainTitle"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, type: 'ease'} }}
                    >
                        our services
                    </motion.h2>
                    <motion.h3 className="subtitle"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5, type: 'ease' } }}
                    >
                        Tailored Solutions for Your Automotive Needs
                    </motion.h3>
                    <motion.p className="description"
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 0.8, x: 0, transition: { delay: 0.5, duration: 0.5, type: 'ease'} }}
                    >
                        Explore a variety of services tailored to meet your
                        automotive needs. Whether you're looking to buy, rent,
                        exchange, or take advantage of special offers, we
                        provide comprehensive solutions to make your car
                        shopping experience seamless and enjoyable. Discover the
                        perfect service for you today!
                    </motion.p>
                    <motion.button
                        className="serv_btn"
                        initial={{ x: '-100%', opacity: 0, scale: 1 }}
                        whileInView={{ x: 0, opacity: 1, transition: { delay: 0.7, duration: 0.5, type: 'ease' } }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.5, type: 'spring', damping: 8 } }}
                    >
                        <a href="#listings">listings</a>
                    </motion.button>
                </motion.div>
                <div
                    className="serv_cards"
                >
                    {serviceCards.map(( card, idx ) => {
                        return (
                            <motion.div className="serv_card"
                                initial={{ opacity: 0, x: "100%" }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5, type: 'spring', damping: 10 } }}
                                viewport={{ once: true }}
                                key={idx}
                            >
                                <img src={card.img} alt="sell_icon" />
                                <h3 className="serv_title">{ card.title }</h3>
                                <p className="serv_depict">{ card.description }</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Element>
    );
}

export default Services;
