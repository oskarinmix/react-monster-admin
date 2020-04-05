import React from 'react';

const Breadcrums = () => {
    return (
        <div className="row page-titles">
            <div className="col-md-6 col-8 align-self-center">
                <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
        </div>
    );
};

export default Breadcrums;