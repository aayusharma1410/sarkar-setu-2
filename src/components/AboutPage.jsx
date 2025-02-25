import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <h1>About SarkarSetu</h1>
            <p>SarkarSetu is a platform designed to bridge the gap between citizens and government services. We aim to provide easy access to information about government schemes and simplify the process of challan verification.</p>

            <h2>Our Mission</h2>
            <p>To empower citizens by providing transparent and accessible information about government initiatives, ensuring that everyone can benefit from the schemes designed for their welfare.</p>

            <h2>Our Vision</h2>
            <p>To be the leading platform for accessing government-related information, fostering a more informed and engaged citizenry.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions or suggestions, please feel free to contact us at: <a href="mailto:info@sarkarsetu.com">info@sarkarsetu.com</a></p>
        </div>
    );
}

export default AboutPage;
