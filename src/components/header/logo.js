import React from 'react';

const Logo = () => {
    return (
        <div className="navbar-header">
            <a className="navbar-brand" href="/">

                <b>


                    <img src="assets/images/logo-icon.png" alt="homepage" className="dark-logo" />

                    <img src="assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                </b>


                <span>

                    <img src="assets/images/logo-text.png" alt="homepage" className="dark-logo" />

                    <img src="assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
        </div>
    );
};

export default Logo;