import React from "react";

function SingleProject({ title, img, githubUrl, deployUrl, tech }) {
    return (
        <div className="project">
            <figure className="project__wrapper">
                <img src={img} alt={title} />
            </figure>
            <div className="project__descriptionn">
                <h3 className="project__description-title">{title}</h3>
                <div className="project__tech">
                    {tech?.map((stech, index) => {
                        return (
                            <span
                                key={index}
                                className={`${
                                    stech.split(" ").length === 1
                                        ? stech
                                        : "other"
                                }`}>
                                {stech}
                            </span>
                        );
                    })}
                </div>
                <div class="project__description-links">
                    <a
                        href={githubUrl}
                        class="project__description-link"
                        target="_blank"
                        rel="noreferrer">
                        <div>Github</div>
                    </a>
                    <a
                        href={deployUrl}
                        class="project__description-link"
                        target="_blank"
                        rel="noreferrer">
                        <div>Website</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
