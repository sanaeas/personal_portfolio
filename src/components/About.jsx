import React from "react";

function About() {
    return (
        <main className="about">
            <div className="about__section">
                <div className="about__section--title">
                    <h2>About</h2>
                </div>
                <p className="about__section--text">
                    Hey, my name is Sanae. I'm a Frontend Developer, and I'm
                    studying Software Engineering at ALX. I am passionate about
                    creating beautiful and user-friendly websites that provide
                    an exceptional user experience. I am a strong believer in
                    continuous learning and staying up-to-date with the latest
                    trends and technologies in the industry.
                </p>
                <div className="about__section--languages">
                    <h3>LANGUAGES</h3>
                    <ul>
                        <li>
                            <span>Arabic</span>
                            <span>Native</span>
                        </li>
                        <li>
                            <span>English</span>
                            <span>Fluent</span>
                        </li>
                        <li>
                            <span>French</span>
                            <span>Basic</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skills__section">
                <div className="skills__section--title">
                    <h2>Web</h2>
                </div>
                <div className="skills-section__cards">
                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="HTML"
                                src="https://www.svgrepo.com/show/452228/html-5.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name html">HTML</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="CSS"
                                src="https://www.svgrepo.com/show/452185/css-3.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name css">CSS</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="Tailwind"
                                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name tailwind">TailwindCSS</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="Bootstrap"
                                src="https://www.svgrepo.com/show/353498/bootstrap.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name bootstrap">Bootstrap</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="SASS"
                                src="https://www.svgrepo.com/show/354310/sass.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name sass">SASS</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="JavaScript"
                                src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name javascript">JavaScript</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="TypeScript"
                                src="https://www.svgrepo.com/show/374146/typescript-official.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name typescript">TypeScript</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="ReactJS"
                                src="https://www.svgrepo.com/show/354259/react.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name react">React</h3>
                    </div>

                    <div className="card">
                        <figure className="card-icon">
                            <img
                                alt="NextJS"
                                src="https://www.svgrepo.com/show/378440/nextjs-fill.svg"
                                className="card__img"
                            />
                        </figure>
                        <h3 className="card__name">NextJS</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
