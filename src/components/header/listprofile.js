import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const ListProfile = () => {
    const { user } = useContext(DataContext)
    return (
        <React.Fragment>
            <ul className="navbar-nav my-lg-0">
                <li className="nav-item hidden-sm-down">
                    <form className="app-search">
                        <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn"><i className="ti-search"></i></a> </form>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={user.picture.medium} alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                        <ul className="dropdown-user">
                            <li>
                                <div className="dw-user-box">
                                    <div className="u-img"><img src={user.picture.medium} alt="user" /></div>
                                    <div className="u-text">
                                        <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
    <p className="text-muted">{user.email}</p><a href="/profile" className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="ti-user"></i> My Profile</a></li>
                            <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                            <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className={`flag-icon flag-icon-${user.nat.toLowerCase()}`}></i></a>
                    <div className="dropdown-menu  dropdown-menu-right animated bounceInDown"> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-in"></i> India</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr"></i> French</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn"></i> China</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de"></i> Dutch</a> </div>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default ListProfile;