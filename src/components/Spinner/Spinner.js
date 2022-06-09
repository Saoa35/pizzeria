import React from 'react';

const Spinner = () => {

    const spinner = require("../../assets/img/spinner.gif");

    return(
        <div className='restaurants__spinner'>
            <img src={spinner} alt='spinner' />
        </div>
    )
}

export default Spinner;