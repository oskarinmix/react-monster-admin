import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext'

const UserProfile = () => {
    
    const { user , getFullName } = useContext(DataContext)
    return (
        <div className="user-profile">

            <div className="profile-img"> <img src={`${user.picture.medium}`} alt="user" /> </div>

            <div className="profile-text"> <a href="/" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> { getFullName()} <span className="caret"></span></a>
                <div className="dropdown-menu animated flipInY">
                    <a href="/" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                    <a href="/" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                    <a href="/" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                    <div className="dropdown-divider"></div> <a href="/" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                    <div className="dropdown-divider"></div> <a href="/" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                </div>
            </div>
        </div>


    );
};

export default UserProfile;