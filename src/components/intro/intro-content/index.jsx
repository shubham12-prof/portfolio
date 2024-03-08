import React from "react";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Keniya Andrew</span>
                    </h1>
                    <p className="title">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
