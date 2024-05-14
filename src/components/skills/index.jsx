import React from "react";
import "./style.scss";
import CallToAction from "../../components/shared/CallToAction/index";
import { IoIosCloudDownload } from "react-icons/io";
import { skills } from "./data"
const Skills = () => {
    return (
        <div id="skills" className="skills-content">
            <div className="header">
                <h1 className="tittle">Skills</h1>
                <h1 className="desc">Here are some of my skills on which I have been working on for the past more then 1 years.</h1>
                <div className="skillsContainer">
                    {skills.map((skill) => (
                        <div className="skill">
                            <div className="skilltittle">{skill.title}</div>
                            <div className="skilllist">
                                {skill.skills.map((item) => (
                                    <div className="skillitem">
                                        <img className="skillimage" alt="" src={item.image} />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <CallToAction
                text="Download CV"
                icon={<IoIosCloudDownload />}
            />
        </div>
    );
};

export default Skills;
