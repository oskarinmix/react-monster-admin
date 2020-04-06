import React from 'react'
import Logo from './logo';
import ListNotifications from './listnotifications';
import ListProfile from './listprofile';

const Header = () => {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <Logo />
                <div className="navbar-collapse">
                    <ListNotifications />
                    <ListProfile />
                </div>
            </nav>
        </header>
    );
}
export default Header;