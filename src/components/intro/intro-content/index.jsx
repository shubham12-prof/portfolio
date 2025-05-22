import React from "react";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";
import "./style.scss";

const IntroContent = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="imagehand" />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Shubham Semwal</span>
          </h1>
          <p className="title">
            I'm a passionate React developer with a knack for crafting delightful user experiences. With a keen eye for detail and a love for clean, efficient code, I thrive in turning ideas into beautifully functional applications.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CallToAction
              text="Contact me"
              action={() => {
                scrollToSection("contact");
              }}
            />
            <CallToAction text="Download Resume" action={handleDownloadResume} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
