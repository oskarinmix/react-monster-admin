import React from 'react';

const Pagewrapper = (props) => {
    return (
        <div className="page-wrapper">
            {props.children}
        </div>
    );
};

export default Pagewrapper;