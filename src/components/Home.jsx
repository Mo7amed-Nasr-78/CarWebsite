import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { statisticals } from "../data";
import { motion } from "framer-motion";
import { IoArrowUpOutline } from "react-icons/io5";

function Home() {
    const icons = ["whats", "facebook", "instagram", "twitter"];
    const [scrollY, setScrollY] = useState(0);

    function handleUpBtn() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const upBtnVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 1,
        },
        visible: {
            opacity: scrollY > window.innerHeight ? 1 : 0,
            y: scrollY > window.innerHeight ? 0 : 100,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 8,
            },
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: 'linear'
            },
        },
    };

    return (
        <section className="home" id="home">
            <div className="container">
                <div className="home_text">
                    <motion.h2
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.4,
                                duration: 0.5,
                                type: "ease",
                            },
                        }}
                        className="mainTitle"
                    >
                        Your Ultimate Car Marketplace
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.6,
                                duration: 0.5,
                                type: "ease",
                            },
                        }}
                        className="subTitle"
                    >
                        Easy buying, flexible rentals, hassle-free exchanges,
                        and unbeatable offers. Find your car now.
                    </motion.h3>
                    <motion.button
                        className="home_btn"
                        initial={{ scale: 1, opacity: 0, x: "-100%" }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.8,
                                duration: 0.5,
                                type: "ease",
                            },
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5, type: "spring" },
                        }}
                    >
                        <a href="#listings">get started</a>
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1.5,
                            type: "spring",
                            damping: 6,
                        },
                    }}
                    className="home_photo"
                ></motion.div>
                <motion.div
                    className="icons"
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2, duration: 0.5, type: "ease" },
                    }}
                >
                    {icons.map((icon) => {
                        return (
                            <motion.div
                                initial={{ scale: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -7,
                                    transition: {
                                        duration: 0.5,
                                        type: "tween",
                                    },
                                }}
                                key={icon}
                                className={`icon ${icon}`}
                            ></motion.div>
                        );
                    })}
                </motion.div>
                <div className="stats_card">
                    {statisticals.map((statistical, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="statistical"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                <h4>{statistical.num}</h4>
                                <h6>{statistical.title}</h6>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <motion.div
                variants={upBtnVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                onClick={handleUpBtn}
                className={`upBtn ${
                    scrollY > window.innerHeight ? "show" : ""
                }`}
            >
                <IoArrowUpOutline />
            </motion.div>
        </section>
    );
}

export default Home;
