import React from "react";
import fashionShop from "../images/fashionShop.png";
import libraryProject from "../images/library.png";
import moviesProject from "../images/movies.png";
import portfolioProject from "../images/portfolio.png";
import googleClone from "../images/googleClone.png";
import twitterClone from "../images/twitterClone.png";
import amazonClone from "../images/amazonClone.png";
import SingleProject from "./SingleProject";

function Projects() {
    const projects = [
        {
            title: "Fashion Shop",
            img: fashionShop,
            githubUrl: "https://github.com/sanaeas/fashion-shop",
            deployUrl: "https://fashion--shop.web.app/",
            tech: [
                "react",
                "HTML",
                "tailwind",
                "stripe",
                "firebase",
                "Fake Store API",
            ],
        },
        {
            title: "Library",
            img: libraryProject,
            githubUrl: "https://github.com/sanaeas/E-library-app",
            deployUrl: "https://library-21fb0.web.app",
            tech: ["react", "HTML", "CSS"],
        },
        {
            title: "Movies",
            img: moviesProject,
            githubUrl: "https://github.com/sanaeas/movies-app",
            deployUrl: "https://movies-app-da5f3.web.app",
            tech: ["react", "HTML", "CSS", "TMDB API"],
        },
        {
            title: "E-Portfolio",
            img: portfolioProject,
            githubUrl: "https://github.com/sanaeas/E-portfolio",
            deployUrl: "https://sanaeas.github.io/E-portfolio/",
            tech: ["HTML", "CSS", "javascript"],
        },
        {
            title: "Google Clone",
            img: googleClone,
            githubUrl: "https://github.com/sanaeas/google-clone",
            deployUrl: "https://clone-eea6e.web.app",
            tech: ["react", "HTML", "CSS", "Google API", "Material UI"],
        },
        {
            title: "Twitter Clone",
            img: twitterClone,
            githubUrl: "https://github.com/sanaeas/twitter-clone",
            deployUrl: "https://twitter-clone-29095.web.app",
            tech: ["react", "HTML", "CSS", "firebase", "React Twitter Embed"],
        },
        {
            title: "Amazon Clone",
            img: amazonClone,
            githubUrl: "https://github.com/sanaeas/amazon-clone",
            deployUrl: "https://clone-8d036.web.app",
            tech: ["react", "HTML", "CSS", "stripe", "firebase"],
        },
    ];

    return (
        <main className="projects">
            <div className="projects__section--title">
                <h2>Projects</h2>
            </div>
            <div className="projects__container">
                {projects.map((project, index) => {
                    return <SingleProject key={index} {...project} />;
                })}
            </div>
        </main>
    );
}

export default Projects;
