import React from 'react';
import "./footer.css";

// Assuming image paths are correct: "./x2earn_logo.png", "./x_logo.png"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            {/* Top Divider Line */}
            <div className="footer-divider-top"></div> 

            <div id="footer_container">
                {/* Left Section: Logo and Description */}
                <div className="footer-left-content">
                    {/* Placeholder for the X2EARN Logo (the 'X' looking icon) */}
                    <img src={"./x2earn.png"} alt="X2EARN Logo" className="x2earn-logo"/> 
                    
                    {/* The description text */}
                    <p className="footer-description-text">
                        X2EARN is a powerful platform that works as a marketing tool for advertisers and an earning tool for everyday users
                    </p>
                </div>

                {/* Right Section: Follow Us */}
                <div className="footer-right-content">
                    <div className="follow-us-section">
                        {/* The black circle X Logo */}
                        <img src={"./x.png"} alt="Follow Us Logo" className="follow-logo"/> 
                        <span className="follow-text">FOLLOW US</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section: The Simple Company (positioned absolutely or via grid/flex-end) */}
            <div className="footer-bottom-bar">
                 <div className="tsc-content">
                    <span className="tsc-dot"></span>
                    <span className="tsc-name">THE SIMPLE COMPANY</span>
                </div>
            </div>
            
        </div>
    );
}