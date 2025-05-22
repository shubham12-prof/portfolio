import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,

          name: "FourthMonkey Wedding Website",
        tags: ["live", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-10.png"),
        },
        link:"https://shubham12-prof.github.io/fourthmonkey-wedding/"
    },
         {
        id: 2,
        name: "User Tree Management System – forestgarden Website",
        tags: ["live", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-9.png"),
        },
        link:"https://www.forest-garden.in/"
    },

    {
        id: 3,
        name: "Wedding Website",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
        },
        link: "https://shubham12-prof.github.io/WeddingLive/"
    },
    {
        id: 4,
        name: "Instagram Clone",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.png"),
        },
        link:"https://instaclone-wqye.onrender.com"
    },
    {
        id: 5,
        name: "Travel Webiste",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.png"),
        },
        link:"https://shubham12-prof.github.io/reacttravel/"
    },
    {
        id: 6,
        name: "Chat Hosting",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.png"),
        },
        link:"https://shubham12-prof.github.io/chathosting/"
    },
    {
        id: 7,
        name: "Crypto Search",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.png"),
        },
        link:"https://shubham12-prof.github.io/cryptocurrency/"
    },
    {
        id: 8,
        name: "travel Quotes",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.png"),
        },
        link:"https://shubham12-prof.github.io/reactlivewebsite/"
    },
    {
        id: 9,
        name: "FoodRecipe Search",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
        link :"https://shubham12-prof.github.io/firebase-foodsite/"
    },
     {
        id: 10,        
        name: "Pinterest",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
        link: "https://pinterest-c5uj.onrender.com",
    },
  
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
