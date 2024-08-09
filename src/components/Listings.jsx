import React, { useEffect, useState } from 'react'
import "../styles/Listings.css";
import { listingsCards } from "../data";
import "../styles/Listings.css";
import { motion } from "framer-motion";

function Listings() {  

    
    const [ scrollY, setScrollY ] = useState(0);
    const [ scrollDir, setScrollDir ] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollY) {
                setScrollDir('down')
            } else {
                setScrollDir('up');
            }
            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, [scrollY]);

    console.log(scrollDir);

    return (
        <section className="listings" id="listings">
            <div className="container">
                <div className="listings_head">
                    <div className="head_text">
                        <motion.h2 className="listings_maintitle"
                            initial={{ opacity: 0, x: '-100%' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                        car listings
                        </motion.h2>
                        <motion.h3 className="listings_subtitle"
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Discover a wide range of high-quality vehicles, meticulously
                            selected to meet your diverse needs
                        </motion.h3>
                    </div>
                </div>
                <div className="listings_cards">
                    {listingsCards.map((carInfo, idx) => {
                        return (
                            <motion.div className="listing_card"
                                initial={{ opacity: 0, y: scrollDir === 'up'? 50: 0 }}
                                whileInView={{ y: 0 , opacity: 1, transition: { duration: 0.2, type: 'spring', damping: 8 }}}
                                whileHover={{ scale: 1.05, transition: { duration: 0.5, type: 'tween' } }}
                                key={ idx }
                            >
                                <div className="new_label">new</div>
                                <div className={`status ${carInfo.state}`}>
                                    {
                                        carInfo.state
                                    }
                                </div>
                                <div className="price_tag">
                                    price:<span>{carInfo.priceTag}</span>
                                </div>
                                <div className="curve"></div>
                                <div className="card_image">
                                    <img src={carInfo.image} alt={""} />
                                </div>
                                <div className="card_text">
                                    <h2 className="listing_card_title">
                                        {carInfo.title}
                                    </h2>
                                    <div className="listing_card_details">
                                        {carInfo.details.map((detail, index) => {
                                            return (
                                                <div className="listing_card_detail" key={index}>
                                                    <img src={ carInfo.icon[index] } alt={detail} key={index} />
                                                    <span> { detail } </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p className="listing_card_description">
                                        {carInfo.description}
                                    </p>
                                    <div className="listing_card_btns">
                                        {carInfo.buttons.map((btn, idx) => (
                                            <motion.button className={`${btn}_btn`}
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.5, type: 'spring', damping: 8 }}
                                                key={idx}
                                            >
                                                {btn}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Listings;
