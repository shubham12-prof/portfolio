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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora facere, impedit veniam blanditiis repellendus
                        repellat, corporis quaerat distinctio animi nihil
                        adipisci dignissimos excepturi obcaecati earum aliquid
                        accusantium nemo deserunt molestias. Quidem, optio!
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
