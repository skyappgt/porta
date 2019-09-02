import React from 'react';
import styled, { ThemeProvider } from "styled-components";


const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;
const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
const SocialLi = styled.li`
    display: inline;
    margin: 0 1em  0 0;
`;
const SocialAnchor = styled.a`
  font-size: 1.2 em;
  text-decoration: none;
  color: #212121;
`;

const getcolor = (name) => {
   if (name == 'facebook') return "#3b5998";
   if (name == 'twitter') return "#0E76A8";
   if (name == 'github') return "#333";
};

const SocialIcon = styled.i`
    color: ${props => props.color};
    font-size: large;
    //box-shadow: 0 0 20px rgba(0,0,255,0.99);
`;

const Social = props => (
    <SocialStyle>
        <div className="Social-container">
            {props.social &&
                <SocialUl>
                    {props.social.map((soc, index)=>(
                        <SocialLi key = {`social-${index}`} target="_blank">
                            <SocialAnchor href = {soc.url} >                              
                                  <SocialIcon color={getcolor(soc.name)} className = {`fa fa-${soc.name}`} />
                            </SocialAnchor>
                        </SocialLi>
                    ))}
                </SocialUl>
            }
        </div>
    </SocialStyle>
);


export default Social;