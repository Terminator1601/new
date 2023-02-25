import React from "react";
import AboutEvent from "../About/aboutEvent.js";
import Heading from "../Heading/Heading.js";
import Item from "../Items/Item.js";
import Mentor from "../Mentor/Mentor.js";
import Navbar from "../Navbar/Navbar.js";
import Prices from "../Prices/Prices.js";
import RegisterButton from "../RegisterButton/registerButton.js";
import Social from "../Social/social.js";
// import './landingPage.css';

function LandingPage(){
    return (
        <div className="landing-page">
            <Navbar />
            <Heading />
            <RegisterButton />
            <Social />
            <AboutEvent />
            <Item />
            <Mentor />
            <Prices />
        </div>
    )
}

export default LandingPage;