import React from "react";

const Footer = ({ footerText }) => {
    return (
        <div className="bg-dark text-light text-center bg-opacity-100 py-2">
            <div className="container">
                <span className="fs-6 fw-light">{footerText}</span>
            </div>
        </div>
    );
};

export default Footer;