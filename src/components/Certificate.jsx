import React from 'react';


const Certificate = props => (
    <div className="Certificate">
        <div className="Certificate-container">
            {props.datos.map((cert, index) => (
                <div className="Certification-item" key={`cert-${index}`}>
                    <h3>{cert.institution}</h3>
                    <p>{cert.description}</p>
                    <span>{cert.date}</span>
                </div>
            ))}
        </div>
    </div>
);


export default Certificate;