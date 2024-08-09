import React from "react";
import { aboutItems } from "../data";
import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about_photo">
                    <motion.img src="/assets/about_photo.png" alt="car" id="car"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: 0 }}
                        transition={{ ease: "linear", duration: 0.5 }}
                    />
                    <img src="/assets/About_Blob.svg" alt="carBlob" id="carBlob"/>
                    <div className="about_values">
                        {aboutItems.map(( item, idx ) => {
                            return (
                                <motion.div className="about_value"
                                    initial={{ y: 200, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1}}
                                    transition={{ duration: idx / 10 }}
                                    viewport={{ once: true, }}
                                    key={idx}
                                >
                                    <div className="about_value_icon">
                                        <motion.img src={item.icon} alt={item.title} 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: idx / 5 }}
                                        />
                                    </div>
                                    <div className="about_value_text">
                                        <h3 className="maintitle">{ item.title }</h3>
                                        <h4 className="subtitle">{ item.description }</h4>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <div className="about_text">
                    <motion.h2 className="about_text_maintitle"
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        about us
                    </motion.h2>
                    <motion.h3 className="about_text_subtitle"
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Discover Who We Are and What Drives Us
                    </motion.h3>
                    <motion.p className="about_text_description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ delay: 0.5 }}
                    >
                        At Cars, we are committed to revolutionizing the car
                        marketplace by offering seamless buying, renting,
                        exchanging, and offering services. Our mission is to
                        connect you with the perfect vehicle that fits your
                        needs and lifestyle.
                    </motion.p>
                    <motion.button className="about_btn"
                        initial={{ y: '100%', opacity: 0}}
                        whileHover={{ scale: 1.1, radius: '50px' }}
                        whileInView={{ y: 0, opacity: 1}}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#contact">contact us</a>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default About;
