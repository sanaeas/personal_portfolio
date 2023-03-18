import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {
    return (
        <header className="header">
            <Link className="header__logo" to="/">
                <img src={Logo} alt="" />
            </Link>
            <div className="header__links">
                <button className="header__link">
                    <GitHubIcon className="header__link--icon" />
                </button>
                <button className="header__link">
                    <LinkedInIcon className="header__link--icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;
