import React from 'react'

const Buttons = ({text, type}) => {
    return(
        <button className={type}>
            {text}
        </button>
    );
}

export default Buttons