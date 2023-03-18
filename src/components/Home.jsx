import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

function Home() {
    return (
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
                        <p>&amp; a Software Engineering Student</p>
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
    );
}

export default Home;
