import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../images/logo.png";

function Home() {
    return (
        <div>
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
            <div>
                <main className="home">
                    <div className="home__container">
                        <div>
                            <h1>
                                HEY, I’M <span> SANAE </span>
                            </h1>
                        </div>
                        <div>
                            <h1>
                                I’M A <span> FRONT-END DEVELOPER </span>
                            </h1>
                        </div>
                        <div>
                            <p>&amp; a Software Engineer Student</p>
                        </div>
                        <h3>
                            <Link to="/about">
                                <ArrowForwardRoundedIcon />
                                <span>About me</span>
                            </Link>
                        </h3>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
