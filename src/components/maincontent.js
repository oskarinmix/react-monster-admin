import React from 'react';

const Maincontent = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                {props.children}
            </div>
        </div>
    );
};

export default Maincontent;