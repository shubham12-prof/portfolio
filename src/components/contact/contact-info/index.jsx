import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>I would be happy to answer any questions?</h4>
            <div className="contact-option">
                <FaPhone />
                <span className="text">+91 7906304629</span>
            </div>
            <div className="contact-option">
                <MdMarkEmailUnread />
                <span className="text">shubhsemwal12@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
