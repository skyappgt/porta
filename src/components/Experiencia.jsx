import React from 'react';


const Experiencia = props => (
    <div className="Experiencia">
        <div className="Experiencia-container">
            {props.datos.map((exp, index)=>(
                <div className="Experiencia-item" key={`Exp-${index}`}>
                <h3>{exp.company} {exp.endDate}
                 {exp.jobTitle} {exp.startDate}
                </h3>

            </div>
            
            ))}
            
        </div>
    </div>
);


export default Experiencia;