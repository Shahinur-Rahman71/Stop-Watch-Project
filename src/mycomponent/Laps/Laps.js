import React from 'react';

const Laps = (props) => {
    return (
        <ul className="list-group list-group-flush">
           
                {props.laps.map((lap,index)=>{
                    return(
                        <li key={index} className="list-group-item">
                            <h4>
                                <span>Minute : </span>
                                <span className=" text-danger">{lap.min}{" "}</span>
                                <span>Second : </span>
                                <span className=" text-danger">{lap.sec}{" "}</span>
                                <span>MiliSecond : </span>
                                <span className=" text-danger">{lap.mill}{" "}</span>
                            </h4>
                        </li>
                    )
                })}
            
        </ul>
    );
};

export default Laps;
