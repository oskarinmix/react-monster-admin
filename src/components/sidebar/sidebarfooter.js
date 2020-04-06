import React from 'react';

const SideBarFooter = () => {
    return (
        <div className="sidebar-footer">

            <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>

            <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>

            <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
        </div>
    );
};

export default SideBarFooter;