import React from 'react';
import Digit from './Digit/Digit';

const CountDown = (props) => {
    
    return (
        <div className="d-flex">
            <Digit colors="green" value={props.Time.min}/>
            <Digit colors="orange" value={props.Time.sec}/>
            <Digit colors="blue" value={props.Time.mill}/>
        </div>
    );
};

export default CountDown;