import React from 'react';

const MainWrapper = (props) => {
    return (
        <div id="main-wrapper">
            {props.children}
        </div>
    );
};

export default MainWrapper;