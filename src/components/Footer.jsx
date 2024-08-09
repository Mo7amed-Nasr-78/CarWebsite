import React from "react";
import "../styles/Footer.css";
import { BiPhone } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer_cols">
                    <div className="footer_column">
                        <h1 className="logo">
                            <span>c</span>ars<span>.</span>
                        </h1>
                        <h4 className="brief">
                            your trusted marketplace for buying, renting,
                            exchanging and offering premium vehicles. follow us
                            on social media for the latest updates and offers.
                        </h4>
                        <div className="icons">
                            <div className="facebook icon"></div>
                            <div className="whats icon"></div>
                            <div className="instagram icon"></div>
                            <div className="twitter icon"></div>
                        </div>
                    </div>
                    <div className="footer_column">
                        <h3 className="column_title">contacts</h3>
                        <div className="contact_info">
                            <div className="info">
                                <BiPhone />
                                <span> (123) 486-78900 </span>
                            </div>
                            <div className="info">
                                <SlLocationPin />
                                <span>123 car street, auto city. CA 90001</span>
                            </div>
                            <div className="info">
                                <MdOutlineEmail />
                                <span> support@cars.com </span>
                            </div>
                            <div className="info">
                                <FaRegClock />
                                <span> min - fri: 9am - 6pm </span>
                            </div>
                        </div>
                    </div>
                    <div className="footer_column">
                        <h3 className="subscribe_text">
                            subscribe to our newsletter for the latest news,
                            special offers and exclusive promotions.
                        </h3>
                        <form action="">
                            <input type="text" placeholder="Enter your email" />
                            <br />
                            <input type="submit" value={"subscribe"} />
                        </form>
                    </div>
                </div>
                <div className="line"></div>
                <div>
                    <h5>© 2024 Cars. All rights reserved.</h5>
                    <h5>Privacy policy</h5>
                </div>
            </div>
        </footer>
    );
}
