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
                <Link
                    to="https://github.com/sanaeas"
                    target="_blank"
                    rel="noreferrer">
                    <button className="header__link">
                        <GitHubIcon className="header__link--icon" />
                    </button>
                </Link>
                <Link
                    to="https://www.linkedin.com/in/sana-assim-a2822426b/"
                    target="_blank"
                    rel="noreferrer">
                    <button className="header__link">
                        <LinkedInIcon className="header__link--icon" />
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
