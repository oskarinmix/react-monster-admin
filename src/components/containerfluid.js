import React from 'react';

const Containerfluid = (props) => {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
};

export default Containerfluid;