import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                    }}
                    to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                    }}
                    to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                    }}
                    to="/projects">
                    <li>Projects</li>
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                    }}
                    to="/contact">
                    <li>Contact</li>
                </NavLink>
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
