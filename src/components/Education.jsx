import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Style from '../styled/H3Style';
import Pstyle from '../styled/PStyle';


const Education = props => (
    <div className="Education">
        <H2Styled name="Education"/>
        <div className="Education-container">
            {props.datos.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                <H3Style>{edu.degree} {edu.institution}
                    <span> {edu.startDate} - {edu.endDate}</span>
                </H3Style>
            </div>

            ))}
            
        </div>
    </div>
);


export default Education;