import React from 'react';
import './Digit.css'
const Digit = (props) => {
    return (
        <div className="digit text-center my-5 mx-3 "style={{borderColor: props.colors}}>
            <h3 className="display-2 py-3" style={{color: props.colors}}>
                {props.value<10 ? `0${props.value}` : props.value}
            </h3>
        </div>
    );
};

export default Digit;