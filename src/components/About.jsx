import React from "react";
import Social from "./Social";
import styled from ".styled-components";

const AboutStyle = styled.div`
    text-align: center;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src={avatar} alt={avatar}/>
                </figure>
            </div>
            <div className="About-name">
                <h2>{name}</h2>
            </div>
            <div className="About-profesion">
                <p>{profession}</p>
            </div>
            <div className="About-desc">
                <p>{bio}</p>
            </div>
            <div className="About-location">
                <p>{address}</p>
            </div>
            <div className="About-social">
                <Social social = {social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;