import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <ul className={`navbar__list ${isOpen ? "open" : ""}`}>
                <Link className="active" to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/projects">
                    <li>Projects</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
            {isOpen ? (
                <CloseRoundedIcon className="nav__burger" onClick={toggleNav} />
            ) : (
                <MenuRoundedIcon className="nav__burger" onClick={toggleNav} />
            )}
        </nav>
    );
}

export default Nav;
