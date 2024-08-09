import React, { useState } from "react";
import { Link } from "react-scroll";
import '../styles/BubbleBar.css';

function BubblesBar({ sections }) {
    const [activeSection, setActiveSection] = useState(null);

    function handleSetActive(to) {
        console.log(to);
        setActiveSection(to);
    }

    return (
        <div className="bubble_bar">
            {sections.map((section) => {
                return (
                    <Link
                        key={section.id}
                        to={section.id}
                        smooth={true}
                        duration={150}
                        spy={true}
                        onSetActive={handleSetActive}
                        className={`bubble ${
                            activeSection === section.id ? "active" : ""
                        }`}
                    >
                    </Link>
                );
            })}
        </div>
    );
}

export default BubblesBar;
