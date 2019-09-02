import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
    text-align: center;
`;
const AvatarStyle = styled.div`
    padding: 2em 0 0 0;
`;
const AvatarImg = styled.img`
    border-radius: 100%;
    width: 200px;
    height: 200px;
    border: 0.25px solid blue;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 40px rgba(0,0,255,0.99);
`;
const AboutName = styled.div`
    text-align: center;
`;
const Nameh2 = styled.h2`
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: navy-blue;
`;
const AboutProfession = styled.p`
    font-weight: 300;
    letter-spacing: 1.6px;
    margin: .2em 0 1em 0;
    color: darkred;
`;
const AboutBio = styled.p`
    font-weight: 300;
    font-size: 1em;
    color: #757575;
`;
const AboutLocation = styled.p`
    font-weight: 300;
    font-size: 1em;
    color: #757575;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <div className="About-container">
            <AvatarStyle>
                <figure>
                    <AvatarImg src={avatar} alt={avatar}/>
                </figure>
            </AvatarStyle>
            <AboutName>
                <Nameh2>{name}</Nameh2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession> {profession} </AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social = {social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;