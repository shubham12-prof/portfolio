import React from "react";
import "./style.scss";
import Section from "../shared/section";
import techIcons from "../../images/tech-icons.png";
import CallToAction from "../../components/shared/CallToAction/index";
import { IoIosCloudDownload } from "react-icons/io";
const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content">
                <div className="left-col">
                    <img
                        src={techIcons}
                        alt=""
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        As a React enthusiast, I've had the opportunity to work
                        on various projects, ranging from simple landing pages
                        to complex web applications. My experience extends
                        beyond just crafting pixel-perfect frontend designs; I
                        also have a solid understanding of backend technologies,
                        including Node.js, Express.js, etc. This holistic
                        approach enables me to architect scalable solutions that
                        meet both user needs and business objectives.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<IoIosCloudDownload />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
