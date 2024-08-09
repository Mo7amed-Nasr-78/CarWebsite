import React from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.h2
                    className="contact_maintitle"
                    initial={{ opacity: 0, x: "-100%" }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                    }}
                >
                    contact
                </motion.h2>
                <motion.h4
                    className="contact_subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
                >
                    we're here to help you with any questions, reach out to us
                    through any of the methods blew
                </motion.h4>

                <div className="form">
                    <div className="form_information">
                        {/* <div> */}
                        <div className="form_txt">
                            <h3 className="form_maintitle">
                                contact information
                            </h3>
                            <h5 className="form_subtitle">
                                get in touch with us for any queries or support
                            </h5>
                        </div>

                        <div className="info_methods">
                            <div className="info_method">
                                <BiPhone />
                                <span> (123) 486-78900 </span>
                            </div>
                            <div className="info_method">
                                <SlLocationPin />
                                <span>123 car street, auto city. CA 90001</span>
                            </div>
                            <div className="info_method">
                                <MdOutlineEmail />
                                <span> support@cars.com </span>
                            </div>
                            <div className="info_method">
                                <FaRegClock />
                                <span> min - fri: 9am - 6pm </span>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <form className="form_fields">
                        <div className="form_field">
                            <div className="name_field field">
                                {/* <br /> */}
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <label htmlFor="name">name :</label>
                                <div className="line">
                                    <span></span>
                                </div>
                            </div>
                            <div className="phone_field field">
                                {/* <br /> */}
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Enter your phone"
                                />
                                <label htmlFor="phone">phone :</label>
                                <div className="line">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="form_field">
                            <div className="email_field field">
                                <input
                                    type="email"
                                    id="emial"
                                    placeholder="Enter your email"
                                />
                                <label htmlFor="email">email :</label>
                                <div className="line">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="form_field">
                            <div className="text_field field">
                                <h4>enter your message :</h4>
                                <textarea
                                    name="message"
                                    id="text"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value={"send message"}
                            className="form_btn"
                        />
                    </form>
                </div>
                <div className="contact_card">
                    <div className="card_text">
                        <motion.h4
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                        > 
                            let's get started 
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.6} }}
                        >
                            the best way to explore <br /> car suits your needs
                        </motion.h2>
                        <motion.button
                            className="contact_card_btn"
                            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                        >
                            make deal
                        </motion.button>
                    </div>
                    <div className="card_photo">
                        <motion.img src="/assets/About_Card_Car.png" alt="Car" 
                            initial={{ opacity: 0, x: '100%' }}
                            whileInView={{ opacity: 1, x: 0, transition: {  duration: 0.5 } }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
