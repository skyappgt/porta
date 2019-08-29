import React from 'react';


const Social = props => (
    <div className="Social">
        <div className="Social-container">
            {props.social &&
                <ul>
                    {props.social.map((soc, index)=>(
                        <li key={`social-${index}`} target="_blank">
                            <a href={soc.url} >
                                {soc.name}
                            </a>
                        </li>
                    ))}
                </ul>
            }
        </div>
    </div>

);


export default Social;