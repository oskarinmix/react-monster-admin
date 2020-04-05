import React from 'react';

const Mainwrapper = (props) => {
    return (
        <div id="main-wrapper">
            {props.children}
        </div>
    );
};

export default Mainwrapper;